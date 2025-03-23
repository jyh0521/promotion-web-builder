# React Electron 보일러플레이트

이 프로젝트는 React와 Electron을 결합한 데스크톱 애플리케이션 보일러플레이트입니다.

## 시작하기

### 개발 환경 설정

필요한 의존성을 설치합니다:

```bash
yarn install
```

개발 모드로 애플리케이션을 실행합니다:

```bash
yarn start
```

이 명령어는 React 개발 서버와 Electron 애플리케이션을 함께 실행합니다.

## 빌드 및 패키징

### 현재 플랫폼용 개발 빌드

현재 실행 중인 플랫폼용 개발 빌드를 생성합니다(실행 가능한 애플리케이션):

```bash
yarn package
```

각 빌드는 고유한 타임스탬프가 있는 새 디렉토리에 생성됩니다(예: `dir_2025-03-23T14-43-54-289Z/win-unpacked`).
이 방식은 이전 빌드의 파일 잠금 문제를 방지합니다.

### 배포용 인스톨러 생성

배포용 인스톨러를 생성합니다:

```bash
yarn dist
```

### 플랫폼별 빌드

#### Windows용 빌드

```bash
yarn package:win
```

#### macOS용 빌드

```bash
yarn package:mac
```

**참고:** macOS용 빌드는 **macOS 시스템에서만** 빌드할 수 있습니다. Windows나 Linux에서는 macOS 빌드가 불가능합니다.

#### Linux용 빌드

```bash
yarn package:linux
```

### 정리

불필요한 빌드 디렉토리를 정리할 수 있습니다:

```bash
yarn clean
```

문제가 있는 `dist` 디렉토리를 강제로 삭제하려면:

```bash
yarn force-clean
```

## 크로스 플랫폼 빌드

Electron-builder는 특정 플랫폼 빌드에 제한이 있습니다:

1. **macOS**: macOS 빌드는 macOS 시스템에서만 가능합니다.
2. **Windows**: Windows 빌드는 macOS와 Linux에서 생성 가능하지만, Wine이 필요합니다.
3. **Linux**: Linux 빌드는 모든 플랫폼에서 가능합니다.

### 크로스 플랫폼 빌드를 위한 설정

다른 플랫폼용 빌드를 위해서는 추가 소프트웨어가 필요할 수 있습니다:

- **macOS에서 Windows 빌드**: Wine 설치가 필요합니다.
- **Linux에서 Windows 빌드**: Wine 설치가 필요합니다.

## 아이콘 설정

빌드에 사용될 아이콘 파일을 `assets` 디렉토리에 추가해야 합니다:

- Windows: `assets/icon.ico` (256x256 픽셀 권장)
- macOS: `assets/icon.icns` (1024x1024 픽셀 권장)
- Linux: `assets/icon.png` (512x512 픽셀 권장)

## 프로젝트 구조

```
react-electron-boilerplate/
├── electron/              # Electron 관련 코드
│   ├── dist/              # 컴파일된 Electron 파일
│   └── main.ts            # Electron 메인 프로세스
├── src/                   # React 앱 소스코드
├── assets/                # 아이콘 및 빌드 리소스
├── build/                 # 빌드된 React 앱
└── dist/                  # 패키징된 애플리케이션
    └── win-unpacked/      # Windows용 실행 파일 (개발 빌드)
    └── mac/               # macOS용 애플리케이션 (개발 빌드)
```

## 기술 스택

- React
- TypeScript
- Electron
- Electron Builder
