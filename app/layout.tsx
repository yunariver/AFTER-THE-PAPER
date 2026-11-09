import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'AFTER THE PAPER — Research Atlas',description:'싸이키델릭 연구를 읽고, 기록하고, 나만의 관점으로 연결하는 개인 리서치 라이브러리'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
