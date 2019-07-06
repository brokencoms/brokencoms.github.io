---
title: "(공통) \"Microsoft Office에서 이 응용프로그램의 라이선스를 찾지 못했습니다\"라며 프로그램이 실행되지 않습니다."
permalink: /office-license-cannot-find/
author_profile: true
categories: software
tags: software office
layout: archive
---

1. [Windows Installer 서비스가 비활성화되었습니다.](#windows-installer-서비스가-비활성화되었습니다)
1. [Microsoft Office 라이선스가 삭제되었습니다](#microsoft-office-라이선스가-삭제되었습니다)

### Windows Installer 서비스가 비활성화되었습니다.

Windows Installer 서비스가 중지되어 오피스 프로그램이 인증절차를 진행하지 못하는 것이 가장 잘 알려진 원인으로, 대부분의 상황은 이 문제로 인해 발생한 경우가 많습니다.

제대로 작동하지 않는 서비스를 복구시키는 방법은 크게 두가지가 있습니다.

1. 정상 모드로 Windows 시작
1. Windows Installer 서비스 상태 활성화

* 상대적으로 1번 해결책이 더 간단합니다.

#### 정상 모드로 Windows 시작
1. Windows 키 + R 을 눌러 실행 창을 엽니다.
1. "msconfig"를 입력하고 Enter키를 눌러 msconfig.exe 파일을 실행합니다.
1. 일반 탭에서 "정상 모드(N)"을 선택하고 확인버튼을 눌러 설정을 저장합니다.
![](/assets/img/posts/office-license-cannot-find/2019-06-02 09;23;36.PNG)

#### Windows Installer 서비스 상태 활성화
1. Windows 키 + R 을 눌러 실행 창을 엽니다.
1. "msconfig"를 입력하고 Enter키를 눌러 msconfig.exe 파일을 실행합니다.
1. 서비스 탭에서 Windows Installer를 찾아 이름 앞의 체크박스를 활성화하고 확인버튼을 눌러 설정을 저장합니다.
![](/assets/img/posts/office-license-cannot-find/2019-06-02 09;24;15.PNG)
