const DATA = [
    {
        title: "Tonic",
        image: "IMG/work-img/work-preview1.png",
        captions: ["CANOPY ", " Back End Dev ", " 2015"],
        description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        tags: ["html", "css", "javaScript"],
        sourceCode: "https://github.com/usmansbk/usmansbk.github.io",
        liveLink: "https://usmansbk.github.io/",
      },
      {
          title: "Multi-Post Stories",
          image: "IMG/work-img/work-preview2.png",
          captions: ["FACEBOOK", "Full Stack Dev", "2015"],
          description:
          "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
          tags: ["html", "Ruby on rails", "css", "javaScript"],
          sourceCode: "https://github.com/usmansbk/usmansbk.github.io",
          liveLink: "https://usmansbk.github.io/",
      },
      {
          title: "Facebook 360",
          image: "IMG/work-img/work-preview3.svg",
          captions: ["FACEBOOK", "Full Stack Dev", "2015"],
          description:
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
          tags: ["html", "Ruby on rails", "css", "javaScript"],
          sourceCode: "https://github.com/usmansbk/usmansbk.github.io",
          liveLink: "https://usmansbk.github.io/",
      },
      {
          title: "Uber Navigation",
          image: "IMG/work-img/work-preview4.png",
          captions: ["Uber", "Lead Developer", "2018"],
          description:
          "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
          tags: ["html", "Ruby on rails", "css", "javaScript"],
          sourceCode: "https://github.com/usmansbk/usmansbk.github.io",
          liveLink: "https://usmansbk.github.io/",
      },
  ];
  
  bulidData(DATA);
  
  function bulidData(data) {
      for (let item = 0; item < data.length; item++) {
          // CREATE PROJECT ITEM
          const list = document.createElement('li');
          list.classList.add('work-card work-cardFirst');
          const workImg = document.createElement('img');
          workImg.src = item.image;
          
      }
  }