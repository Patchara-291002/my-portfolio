'use client'

class ResolutionTracker {
  private static instance: ResolutionTracker;
  private _width: number = 0;
  private _height: number = 0;
  private listeners: (() => void)[] = [];

  private constructor() {
    if (typeof window !== 'undefined') {
      this._width = window.innerWidth;
      this._height = window.innerHeight;
      
      window.addEventListener('resize', this.handleResize);
    }
  }

  static getInstance(): ResolutionTracker {
    if (!ResolutionTracker.instance) {
      ResolutionTracker.instance = new ResolutionTracker();
    }
    return ResolutionTracker.instance;
  }

  private handleResize = (): void => {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }

  addListener(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  get width(): number {
    // เพิ่มการตรวจสอบ window สำหรับ SSR
    if (typeof window === 'undefined') return 0;
    return this._width;
  }

  get height(): number {
    // เพิ่มการตรวจสอบ window สำหรับ SSR
    if (typeof window === 'undefined') return 0;
    return this._height;
  }

  getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
    if (typeof window === 'undefined') return 'desktop'; // Default to desktop on server
    if (this._width < 768) return 'mobile';
    if (this._width >= 768 && this._width < 1024) return 'tablet';
    return 'desktop';
  }

  // ฟังก์ชันช่วยสำหรับตรวจสอบขนาดหน้าจอ - ปรับปรุงเพื่อรองรับ SSR
  isMobile(): boolean {
    // ถ้าอยู่บน server (ไม่มี window) ให้คืนค่า default เป็น false
    if (typeof window === 'undefined') return false;
    return this._width < 768;
  }

  isTablet(): boolean {
    if (typeof window === 'undefined') return false;
    return this._width >= 768 && this._width < 1024;
  }

  isDesktop(): boolean {
    // ค่า default บน server เป็น true (แสดงเป็น desktop)
    if (typeof window === 'undefined') return true;
    return this._width >= 1024;
  }
}

// สร้าง object ที่เข้าถึงง่าย
const Resolution = ResolutionTracker.getInstance();

export default Resolution;