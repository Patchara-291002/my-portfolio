'use client'

import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'

interface AlertItem {
    id: string;
    message: string;
    bgColor: string;
}

export interface AlertRef {
    addAlert: (message: string, bgColor?: string) => void;
}

const Alert = forwardRef<AlertRef>((_, ref) => {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);

    const addAlert = (message: string, bgColor: string = '#FF7D2C') => {
        const newAlert: AlertItem = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            message,
            bgColor
        };

        setAlerts(prev => [...prev, newAlert]);

        setTimeout(() => {
            setAlerts(prev => prev.filter(alert => alert.id !== newAlert.id));
        }, 3000);
    };

    useImperativeHandle(ref, () => ({
        addAlert
    }));

    return (
        <div className="fixed right-4 top-20 z-50 space-y-4">
            {alerts.map((alert, index) => (
                <div
                    key={alert.id}
                    role="alert"
                    className={`transition-all py-4 duration-300 ease-in-out border-0 w-fit alert ml-auto z-50 transform translate-x-0 opacity-100`}
                    style={{
                        backgroundColor: alert.bgColor,
                        transform: `translateY(${index * 2}px)`,
                        animationDelay: `${index * 100}ms`
                    }}
                >
                    <span className="text-white font-medium">{alert.message}</span>
                </div>
            ))}
        </div>
    );
});

Alert.displayName = 'Alert';

export default Alert;