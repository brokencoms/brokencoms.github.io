---
title: "신도리코 스캐너를 PC와 연결하려고 합니다.(SMB 방식)"
date: 2020-02-05 23:54:00
categories: computer
tags: hardware software driver scan printer
difficulty: normal
range: sdok
author: Park Jonghyeon
---

신도리코의 복합기는 스캔 기능을 내장하고 있습니다.

이 기능을 사용하기 위해서는 몇가지 설정이 필요하며, 숙달되면 수 분안에 설정을 마칠 수 있습니다.  

다음의 개별 설정을 완료하면 스캔 기능을 사용할 수 있습니다.  
* [SMB 1.0 기능 활성화](#SMB-10-기능-활성화)
* [컴퓨터 보안 정책 수정](#컴퓨터-보안-정책-수정)
* [공유 폴더 등록](#공유-폴더-등록)
* [스캐너에 컴퓨터 등록](#스캐너에-컴퓨터-등록)

> 본 가이드는 대부분의 스캐너에 대응하기 위해 모델에 따라 불필요할 수 있는 설정을 변경할 수 있으며, 시스템의 보안 취약점을 외부에 노출시킬 수 있습니다.  
>  
> 자세한 내용은 [SMB 1.0 기능 활성화](#SMB-10-기능-활성화) 문단을 참조하세요.

## SMB 1.0 기능 활성화
### SMB 1.0에 대해 알아야 할 중요 사항
일부 오래된 스캐너는 오래된 통신을 사용합니다.  
이 오래된 통신은 보안 취약점이 발견되어 비활성화되었으며, 이후 취약점은 패치되었습니다.  
하지만 여전히 오래된 기능이라는 점에서 발견되지 않은 보안 취약점을 외부에 노출시킬 수 있다는 점은 변하지 않습니다.  

[워너크라이](https://namu.wiki/w/%EC%9B%8C%EB%84%88%ED%81%AC%EB%9D%BC%EC%9D%B4)는 이 취약점을 사용한 대표적인 랜섬웨어였습니다. [관련 자료](https://asec.ahnlab.com/1212)

### 기능 활성화
SMB 1.0은 `Windows 기능 켜기/끄기`를 통해 활성화할 수 있습니다.

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001111.png)  
<img src="/assets/img/commons/windows.svg" width="10px" height="10px"> + `R` 을 동시에 눌러 실행창을 열고 `control`을 실행합니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001259.png)  
나타난 제어판 창에서 `프로그램`을 누르고 이어서 나타나는 화면의 `Windows 기능 켜기/끄기`를 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001319.png)  
나타난 Windows 기능 창에서 `SMB 1.0/CIFS 파일 공유 지원`의 체크박스를 활성화하고 `확인`버튼을 누릅니다.  
만약 오랫동안 `잠시 기다려 주십시오.`라는 문구가 나타나며 목록이 나타나지 않는다면 컴퓨터 시스템의 중요한 부분이 비활성화 되어있을 수 있습니다.  
이 경우, [부록의 Windows 기능 창이 나타나지 않습니다](#windows-기능-창이-나타나지-않습니다)를 참조하세요.

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001429.png)  
안내에 따라 컴퓨터를 다시 시작 합니다.  

## 컴퓨터 보안 정책 수정
![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 184903.png)  
작업 표시줄의 네트워크 아이콘을 우클릭하고 `네트워크 및 인터넷 설정 열기`를 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 184947.png)  
이어서 나타나는 창에서 `네트워크 및 공유 센터`를 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 185149.png)  
좌측의 `고급 공유 설정 변경`을 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 185326.png)  
`게스트 또는 공용`의 `파일 및 프린터 공유` 설정을 `파일 및 프린터 공유 켜기`로 지정합니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 125259.png)  
`모든 네트워크`의 설정을 아래와 같이 지정합니다.  

| 설정 | 선택 |
| ---- | ---- |
| `공용 폴더 공유` | 네트워크 액세스 권한이 있는 모든 사용자가 공용 폴더의 파일을 읽고 쓸 수 있도록 공유 켜기 |
| `파일 공유 연결` | 40비트 또는 56비트 암호화를 사용하는 장치에 대해 파일 공유 사용 |
| `암호로 보호된 공유` | 암호 보호 공유 켜기 |

*`암호로 보호된 공유`의 경우 `암호 보호 공유 끄기`로 지정하면 암호 없이 스캔용으로 생성한 공유 폴더에 접근할 수 있으나, 연결에 문제가 발생하지는 않습니다.

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 185149.png)  
돌아온 `네트워크 및 공유센터` 창 좌측의 `Windows Defender 방화벽`을 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 185731.png)  
`Windows Defender 방화벽을 통해 앱 또는 기능 허용`을 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 100539.png)  
`SMBDirect를 통한 파일 및 프린터 공유`를 찾아 `공용`을 허용합니다.   

## 공유 폴더 등록
스캐너가 스캔할 파일을 컴퓨터에 저장하려면 공유 폴더를 생성하고 등록해야합니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 100619.png)  
새 폴더를 생성합니다.

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 100707.png)  
생성한 폴더를 우클릭해서 `속성`을 누른 후, 이어서 나타나는 창에서 `공유` 탭의 `고급 공유`를 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 100914.png)  
이어서 나타나는 고급 공유 창에서 `선택할 폴더 공유(S)`를 체크하고 `공유 이름(H)`을 지정한 후 `주석(O)`의 `권한(P)` 버튼을 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 100933.png)  
이어서 나타나는 사용 권한 창에서 `Everyone`을 선택하고 `Everyone의 사용 권한(P)`에서 `모든 권한`에 체크하고 `확인` 버튼을 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 101008.png)  
돌아온 속성 창의 `네트워크 파일 및 폴더 공유`를 통해 공유 폴더 지정이 완료되었는지 확인합니다.  
`네트워크 경로(N)`의 `\\(컴퓨터 이름)\(경로)`의 경로는 이후 스캐너에 컴퓨터를 등록할때 사용하기 때문에 미리 기억해두어야 합니다.

## 스캐너에 컴퓨터 등록


![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 101213.png)  
Chrome과 같은 인터넷 브라우저를 사용해 스캐너에 접속합니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 101249.png)  
`수신지 등록` 탭으로 이동해 `새 등록` 버튼을 누릅니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 101304.png)  
`SMB`를 선택합니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 125125.png)  
필요한 정보들을 입력합니다. 입력해야 하는 정보들은 아래와 같습니다.  

| 항목 | 내용 |
| ---- | ---- |
| `등록 번호` | `빈 번호를 사용` 선택 |
| `이름` | 스캐너에서 표시할 컴퓨터 이름 |
| `분류문자` `검색문자` | 스캐너에서 컴퓨터를 검색할때 사용하는 기준 |
| `상용` | 선택 시 스캐너에서 컴퓨터를 검색하지 않아도 송신 대상 메인 화면에 나타남 |
| `호스트 주소` | `호스트명 입력시, 체크하십시오.` 체크, 컴퓨터 IP 입력 |
| `파일 경로` | [공유 폴더 등록](#공유-폴더-등록)에서 생성한 폴더의 네트워크 경로 |
| `사용자 ID` | Windows 사용자 이름 |
| `암호` | Windows 사용자 암호. 없거나 암호 보호 공유를 비활성화했을 경우 공란 |

컴퓨터 IP와 Windows 사용자 이름은 간단한 작업으로 확인할 수 있습니다. [컴퓨터 정보 확인](#컴퓨터-정보-확인) 문단을 참조하세요.

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 101422.png)  
등록을 완료합니다.  

## 부록
아래는 부록으로 특별한 사항이 아닌 이상 읽어보지 않아도 됩니다.  
### 용어 정리
### Windows 기능 창이 나타나지 않습니다.
### 컴퓨터 정보 확인
<img src="/assets/img/commons/windows.svg" width="10px" height="10px"> + `R` 을 동시에 눌러 실행창을 열고 `cmd`을 실행합니다.  

![](/assets/img/posts/connect-printer-to-pc-using-smb/2020-02-15 132343.png)  
`ipconfig`를 입력합니다.  
`IPv4 주소`를 컴퓨터 IP로 사용합니다.  
