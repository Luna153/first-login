// 開始的動畫
const animateStart = () => {
  gsap.registerPlugin(ScrollTrigger);

  // 背景
  const mountLeft1 = document.querySelector('.kv-mount-left1');
  const mountLeft2 = document.querySelector('.kv-mount-left2');
  const treeLeft = document.querySelector('.kv-tree-left');
  const mountRight1 = document.querySelector('.kv-mount-right1');
  const mountRight2 = document.querySelector('.kv-mount-right2');
  const treeRight = document.querySelector('.kv-tree-right');
  // 人物
  const man = document.querySelector('.section-kv--main__person-man');
  const woman = document.querySelector('.section-kv--main__person-woman');

  // const eleLeft = document.querySelectorAll('.section-kv--pattern-left__pic');
  // const eleRight = document.querySelectorAll('.section-kv--pattern-right__pic');
  // 左邊
  const decorateLeft1 = document.querySelectorAll('.kv-decorate-left1');
  const decorateLeft2 = document.querySelectorAll('.kv-decorate-left2');
  const decorateLeft3 = document.querySelectorAll('.kv-decorate-left3');
  const decorateLeft4 = document.querySelectorAll('.kv-decorate-left4');
  const decorateLeft5 = document.querySelectorAll('.kv-decorate-left5');
  const decorateLeft6 = document.querySelectorAll('.kv-decorate-left6');
  const decorateLeft7 = document.querySelectorAll('.kv-decorate-left7');
  const decorateLeft8 = document.querySelectorAll('.kv-decorate-left8');
  // 右邊
  const decorateRight1 = document.querySelectorAll('.kv-decorate-right1');
  const decorateRight2 = document.querySelectorAll('.kv-decorate-right2');
  const decorateRight3 = document.querySelectorAll('.kv-decorate-right3');
  const decorateRight4 = document.querySelectorAll('.kv-decorate-right4');
  const decorateRight5 = document.querySelectorAll('.kv-decorate-right5');
  const decorateRight6 = document.querySelectorAll('.kv-decorate-right6');
  const decorateRight7 = document.querySelectorAll('.kv-decorate-right7');
  const decorateRight8 = document.querySelectorAll('.kv-decorate-right8');

  // 標題動畫
  const animateTitle = gsap.timeline({
    delay: 0.3,
    onComplete: function () {
      // aniLoop();
    },
    onStart: function () {
      window.scrollTo(0, 0);
    },
    // repeat: 1,
    repeatDelay: .5,
  });

  animateTitle
    .from(treeLeft,
      {
        y: '-100%',
        duration: 0.5,
        ease: "power2.out"
      }, "<0.5"
    )
    .from(treeRight,
      {
        y: '-100%',
        duration: 0.5,
        ease: "power2.out"
      }, "<"
    )
    .from(mountLeft1,
      {
        x: '-100%',
        duration: 0.5,
        ease: "power2.out"
      }, "<0.3"
    )
    .from(mountRight1,
      {
        x: '100%',
        duration: 0.5,
        ease: "power2.out"
      }, "<"
    )
    .from(mountLeft2,
      {
        x: '-100%',
        duration: 0.5,
        ease: "power2.out"
      }, "<0.3"
    )
    .from(mountRight2,
      {
        x: '100%',
        duration: 0.5,
        ease: "power2.out"
      }, "<"
    )

    // 人物
    .from(man, {
      scale: 0,
      ease: "elastic.out(1, 0.8)",
      duration: 1,
      clearProps: "all",
    },
      "<0.2")
    .from(woman, {
      scale: 0,
      ease: "elastic.out(1, 0.8)",
      duration: 1,
      clearProps: "all",
    },
      "<0")

    // 錢幣
    .from(decorateRight2, {
      opacity: 0,
    },
      "<0.1")
    .to(decorateRight2, {
      duration: 2,
      y: '50%',
      rotation: -30,
      ease: "power1.inOut",
      opacity: 1,
      repeat: -1,
      yoyo: true,
      yoyoEase: "power1.inOut",
    },
      "<")
    .from(decorateLeft2, {
      opacity: 0,
    },
      "<")
    .to(decorateLeft2, {
      duration: 2,
      y: '50%',
      rotation: -10,
      ease: "power1.inOut",
      opacity: 1,
      repeat: -1,
      yoyo: true,
      yoyoEase: "power1.inOut",
    },
      "<0")
    .from(decorateRight3, {
      opacity: 0,
    },
      "<0.1")
    .to(decorateRight3, {
      duration: 1,
      y: '50%',
      rotation: 10,
      ease: "power1.inOut",
      opacity: 1,
      repeat: -1,
      yoyo: true,
      yoyoEase: "power1.inOut",
    },
      "<")
    .from(decorateLeft6, {
      opacity: 0,
    },
      "<")
    .to(decorateLeft6, {
      duration: 2,
      y: '80%',
      rotation: -10,
      ease: "power1.inOut",
      opacity: 1,
      repeat: -1,
      yoyo: true,
      yoyoEase: "power1.inOut",
    },
      "<")



    // 飄落效果
    // 左 中楓葉
    .from(decorateLeft1, {
      x: '-200%',
      y: '-1500%',
    },
      "<0")
    .to(decorateLeft1, {
      repeat: -1,
      duration: 8,
      x: '600%',
      y: '1200%',
      rotation: -60,
      opacity: 0,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0")
    // 右 淡橘色葉子
    .from(decorateRight1, {
      // delay: 2,
      duration: 4,
      x: '-100%',
      y: -300,
      rotation: 30,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0")
    // .from(decorateRight1, {
    //   x: '-100%',
    //   y: '-1000%',
    // },
    //   "<0")
    // .to(decorateRight1, {
    //   repeat: -1,
    //   duration: 10,
    //   x: '100%',
    //   y: '800%',
    //   rotation: -200,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0")
    // 左 錢幣一
    // .from(decorateLeft2, {
    //   // duration: 2.2,
    //   x: '-100%',
    //   y: -200,
    //   rotation: 360,
    //   ease: "power1.out",
    //   opacity: 0.8,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0.2")

    // 右 錢幣一
    // .from(decorateRight2, {
    //   // delay: 1.8,
    //   duration: 2.2,
    //   x: '-100%',
    //   y: -300,
    //   rotation: 300,
    //   ease: "power1.out",
    //   opacity: 0.8,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0.1")

    // 左 小楓葉
    .from(decorateLeft3, {
      x: '-600%',
      y: '-1500%',
    },
      "<0.2")
    .to(decorateLeft3, {
      repeat: -1,
      duration: 5,
      x: '100%',
      y: '1200%',
      rotation: 500,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.2")
    // // 右 錢幣二
    // .from(decorateRight3, {
    //   duration: 3,
    //   x: '100%',
    //   y: -500,
    //   rotation: -280,
    //   ease: "power1.out",
    //   opacity: 0.8,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0")

    // 左 綠色葉子
    .from(decorateLeft4, {
      // delay: 1.4,
      duration: 3,
      x: '-100%',
      y: -200,
      rotation: -80,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.3")
    // .from(decorateLeft4, {
    //   y: '-1200%',
    // },
    //   "<0.3")
    // .to(decorateLeft4, {
    //   repeat: -1,
    //   // delay: 1.4,
    //   duration: 7,
    //   x: '300%',
    //   y: '900%',
    //   rotation: 300,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0.2")
    // 右 蜻蜓
    .from(decorateRight4, {
      // delay: 2.5,
      duration: 2,
      x: '1000%',
      y: -200,
      rotation: 30,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.1")
    // 左 大楓葉
    .from(decorateLeft5, {
      // delay: 1.6,
      duration: 5,
      x: '600%',
      y: -400,
      rotation: -180,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.2")

    // .from(decorateLeft5, {
    //   y: '-1000%',
    // },
    //   "<0.2")
    // .to(decorateLeft5, {
    //   repeat: -1,
    //   duration: 5,
    //   x: '-300%',
    //   y: '600%',
    //   rotation: -180,
    //   ease: "power1.out",
    //   opacity: 0.8,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0.2")
    // 右 綠色葉子
    .from(decorateRight5, {
      y: '-1200%',
    },
      "<0")
    .to(decorateRight5, {
      repeat: -1,
      duration: 7,
      x: '200%',
      y: '800%',
      rotation: -360,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0")
    // 左 錢幣二
    // .from(decorateLeft6, {
    //   // delay: 2,
    //   duration: 3,
    //   x: '400%',
    //   y: -400,
    //   rotation: -360,
    //   ease: "power1.out",
    //   opacity: 0.8,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0.1")

    // 右 大楓葉
    .from(decorateRight6, {
      // delay: 2.6,
      duration: 4,
      x: '-300%',
      y: -500,
      rotation: 220,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0")
    // .from(decorateRight6, {
    //   y: '-1000%',
    // },
    //   "<0")
    // .to(decorateRight6, {
    //   repeat: -1,
    //   duration: 10,
    //   x: '350%',
    //   y: '700%',
    //   rotation: 220,
    //   // ease: "power1.out",
    //   // opacity: 0.2,
    //   onUpdate: function () {
    //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
    //   },
    // },
    //   "<0")
    // 左 橘色葉子
    .from(decorateLeft7, {
      y: '-1500%',
    },
      "<0.2")
    .to(decorateLeft7, {
      repeat: -1,
      duration: 9,
      x: '200%',
      y: '600%',
      rotation: -310,
      opacity: 0.5,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.2")
    // 右 小楓葉
    .from(decorateRight7, {
      y: '-1000%',
    },
      "<0")
    .to(decorateRight7, {
      repeat: -1,
      duration: 4,
      x: '-400%',
      y: '1100%',
      rotation: 300,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0")
    // 右 中楓葉
    .from(decorateRight8, {
      // delay: 2.6,
      duration: 4,
      x: '100%',
      y: -300,
      rotation: 220,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.1")
    // .from(decorateRight8, {
    //   y: '-1000%',
    // },
    //   "<0.1")
    // 左 最大楓葉
    .from(decorateLeft8, {
      delay: 2.2,
      duration: 4,
      x: '-200%',
      y: -600,
      rotation: 280,
      ease: "power1.out",
      opacity: 0.8,
      onUpdate: function () {
        this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
      },
    },
      "<0.1")

  // .from(decorateLeft8, {
  //   y: '-1000%',
  // },
  //   "<0.1")
  // .to(decorateLeft8, {
  //   repeat: -1,
  //   duration: 6,
  //   x: '120%',
  //   y: '100%',
  //   rotation: 280,
  //   ease: "power1.out",
  //   opacity: 0.5,
  //   onUpdate: function () {
  //     this.targets()[0].style.transform += ` translateY(${Math.sin(gsap.timeline().time() * 4) * 10}px)`;
  //   },
  // },
  //   "<0.1")


  // // 左 錢幣一
  // .from(decorateLeft2, {
  //   opacity: 0,
  // },
  //   "<0.2")
  // .to(decorateLeft2, {
  //   duration: 2,
  //   y: '50%',
  //   rotation: -10,
  //   ease: "power1.inOut",
  //   opacity: 1,
  //   repeat: -1,
  //   yoyo: true,
  //   yoyoEase: "power1.inOut",
  // },
  //   "<0.2")
  // // 右 錢幣一
  // .from(decorateRight2, {
  //   opacity: 0,
  // },
  //   "<0.1")
  // .to(decorateRight2, {
  //   duration: 2,
  //   y: '50%',
  //   rotation: -30,
  //   ease: "power1.inOut",
  //   opacity: 1,
  //   repeat: -1,
  //   yoyo: true,
  //   yoyoEase: "power1.inOut",
  // },
  //   "<0.1")
  // // 右 錢幣二
  // .from(decorateRight3, {
  //   opacity: 0,
  // },
  //   "<0")
  // .to(decorateRight3, {
  //   duration: 2,
  //   y: '50%',
  //   rotation: -30,
  //   ease: "power1.inOut",
  //   opacity: 1,
  //   repeat: -1,
  //   yoyo: true,
  //   yoyoEase: "power1.inOut",
  // },
  //   "<0")
  // // 左 錢幣二
  // .from(decorateLeft6, {
  //   opacity: 0,
  // },
  //   "<0")
  // .to(decorateLeft6, {
  //   duration: 2,
  //   y: '80%',
  //   rotation: -10,
  //   ease: "power1.inOut",
  //   opacity: 1,
  //   repeat: -1,
  //   yoyo: true,
  //   yoyoEase: "power1.inOut",
  // },
  //   "<0")
};

// 活動登錄login
const animateLogin = () => {
  const login = document.querySelector('.section-login');

  const loginYellowFlower = document.querySelector('.section-login--pattern-left__pic.yellow-flower');
  const loginGreenLeaves = document.querySelector('.section-login--pattern-left__pic.green-leaves');
  const loginPinkLeavesLg = document.querySelector('.section-login--pattern-left__pic.pink-leaves-lg');
  const loginBrownFlower = document.querySelector('.section-login--pattern-right__pic.brown-flower');
  const loginPinkLeavesMd = document.querySelector('.section-login--pattern-right__pic.pink-leaves-md');
  const loginBrownLeaves = document.querySelector('.section-login--pattern-right__pic.brown-leaves');
  const loginOrangeLeaves = document.querySelector('.section-login--pattern-right__pic.login-orangeLeaves');

  gsap.timeline({
    defaults: {
      ease: 'ease',
    },
    scrollTrigger: {
      trigger: login,
      start: 'top 40%',
      end: '+=10%',
      scrub: true
    }
  })
    .from(loginYellowFlower, {
      x: '-300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.5)
    .from(loginGreenLeaves, {
      x: '-120%',
      opacity: 0.3,
      ease: "power2.out"
    }, 1.5)
    .from(loginPinkLeavesLg, {
      x: '-300%',
      opacity: 0.2,
      ease: "power2.out"
    }, 3)
    .from(loginBrownFlower, {
      x: '100%',
      opacity: 0.5,
      ease: "power2.out"
    }, 1.5)
    .from(loginPinkLeavesMd, {
      x: '100%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.1)
    .from(loginBrownLeaves, {
      x: '100%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.4)
    .from(loginOrangeLeaves, {
      x: '300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.3)
};

// 活動任務missiom
const animateMissiom = () => {
  const mission = document.querySelector('.section-mission');

  const missionpinkLeavesSm = document.querySelector('.section-mission--pattern-left__pic.pink-leaves-sm');
  const missionPinkLeavesLg = document.querySelector('.section-mission--pattern-left__pic.pink-leaves-lg');
  const missionGreenLeaves = document.querySelector('.section-mission--pattern-left__pic.green-leaves');
  const missionYellowFlower = document.querySelector('.section-mission--pattern-left__pic.yellow-flower');
  const missionBrownFlower = document.querySelector('.section-mission--pattern-right__pic.brown-flower');
  const missionPinkLeavesMd = document.querySelector('.section-mission--pattern-right__pic.pink-leaves-md');
  const missionBrownLeaves = document.querySelector('.section-mission--pattern-right__pic.brown-leaves');
  const missionMissionNut = document.querySelector('.section-mission--pattern-right__pic.mission-nut');

  gsap.timeline({
    defaults: {
      ease: 'ease',
    },
    scrollTrigger: {
      trigger: mission,
      start: 'top 40%',
      end: '+=10%',
      scrub: true
    }
  })
    .from(missionpinkLeavesSm, {
      x: '-500%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0)
    .from(missionPinkLeavesLg, {
      x: '-200%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.1)
    .from(missionGreenLeaves, {
      x: '-100%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.3)
    .from(missionYellowFlower, {
      x: '-300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.4)
    .from(missionBrownFlower, {
      x: '300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.1)
    .from(missionPinkLeavesMd, {
      x: '300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.2)
    .from(missionBrownLeaves, {
      x: '300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.3)
    .from(missionMissionNut, {
      x: '300%',
      opacity: 0.5,
      ease: "power2.out"
    }, 0.5)
};



// 網銀會員好方便
const animateConvenient = () => {
  const convenient = document.querySelector('.section-convenient');

  gsap.timeline({
    defaults: {
      ease: 'elastic',
    },
    scrollTrigger: {
      trigger: convenient,
      start: 'top center',
      end: '+=60%',
      scrub: true
    }
  })
    // 左邊--紅色樹葉
    .from(
      ".section-convenient--bg-left_1",
      {
        y: '-200%',
        ease: "power2.out",
        rotation: 500,
        opacity: 0,
      },
      "<0.4"
    )
    // 右邊--綠色樹葉
    .from(
      ".section-convenient--bg-right_1",
      {
        x: '100%',
        ease: "power2.out"
      },
      "<"
    )
    // 左邊--棕色樹葉
    .from(
      ".section-convenient--bg-left_2",
      {
        x: '-100%',
        ease: "power2.out",
        scale: 0.5,
      },
      "<0.4"
    )
    // 右邊--黃色花
    .from(
      ".section-convenient--bg-right_2",
      {
        scale: 0,
        ease: "elastic.out(1, 0.8)",
        clearProps: "all",
      },
      "<"
    )

};
// 立即下載
const animateDownload = () => {
  const download = document.querySelector('.section-download');

  gsap.timeline({
    defaults: {
      ease: 'elastic',
    },
    scrollTrigger: {
      trigger: download,
      start: '10% center',
      end: '+=60%',
      scrub: true
    }
  })
    // 左邊--
    // 左邊--紅色樹葉
    .from(
      ".section-download--bg-left_1",
      {
        x: '-100%',
        ease: "power2.out",
      },
      "<0.5"
    )
    // 右邊--綠色樹葉
    .from(
      ".section-download--bg-right_1",
      {
        x: '100%',
        ease: "power2.out"
      },
      "<"
    )
    // 左邊--棕色樹葉
    .from(
      ".section-download--bg-left_2",
      {
        x: '-100%',
        ease: "power2.out"
      },
      "<0.5"
    )
    // 右邊--黃色樹葉
    .from(
      ".section-download--bg-right_2",
      {
        x: '100%',
        ease: "power2.out"
      },
      "<"
    )
    // 左邊--綠色樹葉
    .from(
      ".section-download--bg-left_5",
      {
        x: '-100%',
        ease: "power2.out",
        // rotation: "80",
      },
      "<0.5"
    )
    // 右邊--棕色樹葉
    .from(
      ".section-download--bg-right_3",
      {
        x: '100%',
        ease: "power2.out"
      },
      "<"
    )
    // 左邊--大草叢
    .from(
      ".section-download--bg-left_3",
      {
        scale: 0,
        ease: "elastic.out(1, 0.8)",
        clearProps: "all",
      },
      "<1"
    )
    // 右邊--草叢
    .from(
      ".section-download--bg-right_4",
      {
        scale: 0,
        ease: "elastic.out(1, 0.8)",
        clearProps: "all",
      },
      "<"
    )
    // 左邊--綠色草叢
    .from(
      ".section-download--bg-left_4",
      {
        scale: 0,
        ease: "elastic.out(1, 0.8)",
        // duration: 1,
        clearProps: "all",
      },
      "<0.5"
    )


};
// 活動Q&A
const animateFaq = () => {
  const faq = document.querySelector('.section-faq');

  gsap.timeline({
    defaults: {
      ease: 'elastic',
    },
    scrollTrigger: {
      trigger: faq,
      start: 'top center',
      end: '+=20%',
      scrub: true
    }
  })
    // 左邊--綠色樹葉
    .from(
      ".section-faq--bg-left_1",
      {
        y: '-200%',
        ease: "power2.out",
        rotation: 100,
        opacity: 0,
        rotation: '-35',
      },
      "<0.4"
    )
    // 右邊--綠色樹葉
    .from(
      ".section-faq--bg-right_1",
      {
        x: '100%',
        ease: "power2.out",
        rotation: '-98',
      },
      "<"
    )
    // 右邊--黃色花
    .from(
      ".section-faq--bg-right_2",
      {
        scale: 0,
        ease: "elastic.out(1, 0.8)",
        clearProps: "all",
      },
      "<0.4"
    )
    // 左邊--紅色樹葉
    .from(
      ".section-faq--bg-left_2",
      {
        y: '-300%',
        ease: "power2.out",
        opacity: 0,
        rotation: 300,
      },
      "<0.4"
    )

};



// 驅動動畫
const gsapAni = () => {
  animateStart();
  animateLogin();
  animateMissiom();
  animateConvenient();
  animateDownload();
  animateFaq();
};