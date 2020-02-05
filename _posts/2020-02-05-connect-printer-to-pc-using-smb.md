---
title: "신도리코 스캐너를 PC와 연결하려고 합니다.(SMB 방식)"
date: 2020-02-05 23:54:00
categories: computer
tags: hardware software driver scan printer
difficulty: medium
range: sdok
author: Park Jonghyeon
---

신도리코의 복합기는 스캔 기능을 내장하고 있습니다.

이 기능을 사용하기 위해서는 몇가지 설정이 필요하며, 숙달되면 수 분안에 설정을 마칠 수 있습니다.  

다음의 개별 설정을 완료하면 스캔 기능을 사용할 수 있습니다.  
* [SMB 1.0 기능 활성화](#SMB-1.0-기능-활성화)
* [컴퓨터 보안 정책 수정](#컴퓨터-보안-정책-수정)
* [공유 폴더 등록](#공유-폴더-등록)
* [스캐너에 컴퓨터 등록](#스캐너에-컴퓨터-등록)

> 본 가이드는 대부분의 스캐너에 대응하기 위해 모델에 따라 불필요할 수 있는 설정을 변경할 수 있으며, 시스템의 보안 취약점을 외부에 노출시킬 수 있습니다.  
>  
> 자세한 내용은 [SMB 1.0 기능 활성화](#SMB-1.0-기능-활성화) 문단을 참조하세요.

## SMB 1.0 기능 활성화
### SMB 1.0에 대해 알아야 할 중요 사항
일부 오래된 스캐너는 오래된 통신을 사용합니다.  
이 오래된 통신은 보안 취약점이 발견되어 비활성화되었으며, 이후 취약점은 패치되었습니다.  
하지만 여전히 오래된 기능이라는 점에서 발견되지 않은 보안 취약점을 외부에 노출시킬 수 있다는 점은 변하지 않습니다.  

[워너크라이](https://namu.wiki/w/%EC%9B%8C%EB%84%88%ED%81%AC%EB%9D%BC%EC%9D%B4)는 이 취약점을 사용한 대표적인 랜섬웨어였습니다. [관련 자료](https://asec.ahnlab.com/1212)

### 기능 활성화
SMB 1.0은 `Windows 기능 켜기/끄기`를 통해 활성화할 수 있습니다.

![](./assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001111.png)  
<img src="/assets/img/commons/windows.svg" width="10px" height="10px"> + `R` 을 동시에 눌러 실행창을 열고 `control`을 실행합니다.  

![](./assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001259.png)  
나타난 제어판 창에서 `프로그램`을 누르고 이어서 나타나는 화면의 `Windows 기능 켜기/끄기`를 누릅니다.  

![](./assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001319.png)  
나타난 Windows 기능 창에서 `SMB 1.0/CIFS 파일 공유 지원`의 체크박스를 활성화하고 `확인`버튼을 누릅니다.  
만약 오랫동안 `잠시 기다려 주십시오.`라는 문구가 나타나며 목록이 나타나지 않는다면 컴퓨터 시스템의 중요한 부분이 비활성화 되어있을 수 있습니다.  

![](./assets/img/posts/connect-printer-to-pc-using-smb/2020-02-06 001429.png.png)  
안내에 따라 컴퓨터를 다시 시작 합니다.  

## 컴퓨터 보안 정책 수정
## 공유 폴더 등록
## 스캐너에 컴퓨터 등록
## 부록
아래는 부록으로 특별한 사항이 아닌 이상 읽어보지 않아도 됩니다.  
### Windows 기능 창이 나타나지 않습니다.