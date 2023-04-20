import { useEffect, useRef } from "react";
import PageLayout from "@components/PageLayout";
import CustomGlobalStyle from "@styles/pages/home";
import enterView from "@utils/sticky";
import Link from "next/link";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return false;
    }

    enterView({
      selector: "section",
      enter: function (el) {
        el.classList.add("entered");
      },
    });

    const html = document.documentElement;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const bganimdir = "/images/scrollytelling_v34_comp";

    var loading = new Array();
    loading = [
      "/images/scrollytelling_v34_loading/000.webp",
      "/images/scrollytelling_v34_loading/001.webp",
      "/images/scrollytelling_v34_loading/002.webp",
      "/images/scrollytelling_v34_loading/003.webp",
      "/images/scrollytelling_v34_loading/004.webp",
      "/images/scrollytelling_v34_loading/005.webp",
      "/images/scrollytelling_v34_loading/006.webp",
      "/images/scrollytelling_v34_loading/007.webp",
      "/images/scrollytelling_v34_loading/008.webp",
      "/images/scrollytelling_v34_loading/009.webp",
      "/images/scrollytelling_v34_loading/010.webp",
      "/images/scrollytelling_v34_loading/011.webp",
      "/images/scrollytelling_v34_loading/012.webp",
      "/images/scrollytelling_v34_loading/013.webp",
    ];

    var loop1 = new Array();
    loop1 = [
      // `${bganimdir}/045.webp`,
      `${bganimdir}/046.webp`,
      `${bganimdir}/047.webp`,
      `${bganimdir}/048.webp`,
      `${bganimdir}/049.webp`,
      `${bganimdir}/050.webp`,
      `${bganimdir}/051.webp`,
      `${bganimdir}/052.webp`,
      `${bganimdir}/053.webp`,
      `${bganimdir}/054.webp`,
      `${bganimdir}/055.webp`,
    ];

    var loop2 = new Array();
    loop2 = [
      // `${bganimdir}/085.webp`,
      `${bganimdir}/086.webp`,
      `${bganimdir}/087.webp`,
      `${bganimdir}/088.webp`,
      `${bganimdir}/089.webp`,
      `${bganimdir}/090.webp`,
      `${bganimdir}/091.webp`,
      `${bganimdir}/092.webp`,
      `${bganimdir}/093.webp`,
      `${bganimdir}/094.webp`,
      `${bganimdir}/095.webp`,
    ];

    var loop3 = new Array();
    loop3 = [
      // `${bganimdir}/125.webp`,
      `${bganimdir}/126.webp`,
      `${bganimdir}/127.webp`,
      `${bganimdir}/128.webp`,
      `${bganimdir}/129.webp`,
      `${bganimdir}/130.webp`,
      `${bganimdir}/131.webp`,
      `${bganimdir}/132.webp`,
      `${bganimdir}/133.webp`,
      `${bganimdir}/134.webp`,
      `${bganimdir}/135.webp`,
      `${bganimdir}/136.webp`,
      `${bganimdir}/137.webp`,
      `${bganimdir}/138.webp`,
      `${bganimdir}/139.webp`,
      `${bganimdir}/140.webp`,
      `${bganimdir}/141.webp`,
      `${bganimdir}/142.webp`,
      `${bganimdir}/143.webp`,
      `${bganimdir}/144.webp`,
      `${bganimdir}/145.webp`,
    ];

    var loop4 = new Array();
    loop4 = [
      // `${bganimdir}/175.webp`,
      `${bganimdir}/176.webp`,
      `${bganimdir}/177.webp`,
      `${bganimdir}/178.webp`,
      `${bganimdir}/179.webp`,
      `${bganimdir}/180.webp`,
      `${bganimdir}/181.webp`,
      `${bganimdir}/182.webp`,
      `${bganimdir}/183.webp`,
      `${bganimdir}/184.webp`,
      `${bganimdir}/185.webp`,
    ];

    var loop5web2 = new Array();
    loop5web2 = [
      // `${bganimdir}/215.webp`,
      `${bganimdir}/216.webp`,
      `${bganimdir}/217.webp`,
      `${bganimdir}/218.webp`,
      `${bganimdir}/219.webp`,
      `${bganimdir}/220.webp`,
      `${bganimdir}/221.webp`,
      `${bganimdir}/222.webp`,
      `${bganimdir}/223.webp`,
      `${bganimdir}/224.webp`,
      `${bganimdir}/225.webp`,
    ];

    var loop6btc = new Array();
    loop6btc = [
      // `${bganimdir}/240.webp`,
      `${bganimdir}/241.webp`,
      `${bganimdir}/242.webp`,
      `${bganimdir}/243.webp`,
      `${bganimdir}/244.webp`,
      `${bganimdir}/245.webp`,
      `${bganimdir}/246.webp`,
      `${bganimdir}/247.webp`,
      `${bganimdir}/248.webp`,
      `${bganimdir}/249.webp`,
      `${bganimdir}/250.webp`,
    ];

    var loop7web3 = new Array();
    loop7web3 = [
      `${bganimdir}/270.webp`,
      `${bganimdir}/271.webp`,
      `${bganimdir}/272.webp`,
      `${bganimdir}/273.webp`,
      `${bganimdir}/274.webp`,
      `${bganimdir}/275.webp`,
      `${bganimdir}/276.webp`,
      `${bganimdir}/277.webp`,
      `${bganimdir}/278.webp`,
      `${bganimdir}/279.webp`,
      `${bganimdir}/280.webp`,
      `${bganimdir}/281.webp`,
      `${bganimdir}/282.webp`,
      `${bganimdir}/283.webp`,
      `${bganimdir}/284.webp`,
      `${bganimdir}/285.webp`,
    ];

    const frameCount = 285;
    const currentFrame = (index) =>
      `/images/scrollytelling_v34_comp/${index
        .toString()
        .padStart(3, "0")}.webp`;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    var runAnim = new Array();
    runAnim = {
      run: true,
      anim: loading,
      loop: false,
    };

    var x = 0;
    Animate(x);

    function Animate(x) {
      new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (
            runAnim.run == true &&
            runAnim.loop == false &&
            x < runAnim.anim.length
          ) {
            const now = Date.now();
            const img = new Image();
            img.src = runAnim.anim[x];
            img.onload = function () {
              context.drawImage(img, 0, 0);
            };
            x++;
          } else if (
            runAnim.run == true &&
            runAnim.loop == true &&
            x < runAnim.anim.length - 1
          ) {
            const now = Date.now();
            const img = new Image();
            img.src = runAnim.anim[x];
            img.onload = function () {
              context.drawImage(img, 0, 0);
            };
            x++;
          } else if (
            runAnim.run == true &&
            runAnim.loop == true &&
            x >= runAnim.anim.length - 1
          ) {
            const now = Date.now();
            const img = new Image();
            img.src = runAnim.anim[x];
            img.onload = function () {
              context.drawImage(img, 0, 0);
            };
            x = 0;
          } else {
          }
        }, 100);
      }).then(() => {});
    }
    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = 2000;
    canvas.height = 2000;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    const handleEventListener = () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex));

      if (frameIndex > 0 && frameIndex <= 45) {
        // static: what is web3 - transition to printing press
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 45 && frameIndex <= 55) {
        // loop1: printing press
        runAnim = {
          run: true,
          anim: loop1,
          loop: true,
        };
      }
      if (frameIndex > 55 && frameIndex <= 85) {
        // transition: printing press - telephone
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 85 && frameIndex <= 95) {
        // loop2: telephone
        runAnim = {
          run: true,
          anim: loop2,
          loop: true,
        };
      }
      if (frameIndex > 95 && frameIndex <= 125) {
        // transition: telephone to broadcast
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 125 && frameIndex <= 145) {
        // loop3: broadcast
        runAnim = {
          run: true,
          anim: loop3,
          loop: true,
        };
      }
      if (frameIndex > 145 && frameIndex <= 175) {
        // transition: broadcast to internet
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 175 && frameIndex <= 185) {
        // loop4: internet
        runAnim = {
          run: true,
          anim: loop4,
          loop: true,
        };
      }
      if (frameIndex > 185 && frameIndex <= 215) {
        // transition: reveal hub and spoke shape
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 215 && frameIndex <= 225) {
        // loop5: hub and spoke web2
        runAnim = {
          run: true,
          anim: loop5web2,
          loop: true,
        };
      }
      if (frameIndex > 225 && frameIndex <= 240) {
        // transition: web2 to web3
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 240 && frameIndex <= 250) {
        // loop6: web3
        runAnim = {
          run: true,
          anim: loop6btc,
          loop: true,
        };
      }
      if (frameIndex > 250 && frameIndex <= 269) {
        // transition: web3 to grid
        runAnim = {
          run: false,
          anim: "",
          loop: false,
        };
      }
      if (frameIndex > 270 && frameIndex <= 285) {
        // loop7: grid
        runAnim = {
          run: true,
          anim: loop7web3,
          loop: true,
        };
      }
    };

    window.addEventListener("scroll", handleEventListener);

    preloadImages();

    return () => window.removeEventListener("scroll", handleEventListener);
  }, []);

  return (
    <>
      <CustomGlobalStyle />
      <PageLayout
        title={"Web3 Working Group"}
        darkHeader
        stickyHeader
        staticBottom
      >
        <>
          <canvas ref={canvasRef}>Not supported in your browser</canvas>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "70%" }}>
                <span className="span-block">An era-defining</span>
                <br />
                <span className="custom-gradient">technological</span>
                <br />
                <span className="custom-gradient">revolution</span>
                <br />
                <span className="span-block">is underway</span>
                <br />
                <span className="scroll-text">Scroll to continue</span>
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "100%" }}>
                <span className="custom-gradient">The printing</span>
                <br />
                <span className="custom-gradient">press</span>
                <br />
                <span className="span-block">introduced</span>
                <br />
                <span className="custom-gradient">mass</span>
                <span className="custom-gradient">publishing</span>
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "100%" }}>
                <span className="span-block">The telegraph</span>
                <br />
                <span className="span-block">and telephone</span>
                <br />
                <span className="custom-gradient">connected people</span>
                <br />
                <span className="custom-gradient">around the world</span>
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "100%" }}>
                <span className="custom-gradient">Broadcast</span>
                <br />
                <span className="custom-gradient">sent radio</span>
                <span className="span-block">and</span>
                <br />
                <span className="custom-gradient">television</span>
                <br />
                <span className="span-block">everywhere</span>
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "100%" }}>
                <span className="custom-gradient">The Web</span>
                <br />
                <span className="span-block">brought</span>
                <br />
                <span className="custom-gradient">publishing,</span>
                <br />
                <span className="custom-gradient">communication</span>
                <br />
                <span className="span-block">and</span>
                <span className="custom-gradient">broadcast</span>
                <br />
                <span className="span-block">to everyone</span>
              </h1>
            </div>
          </section>
          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "100%" }}>
                <span className="span-block">But it&apos;s become</span>
                <br />
                <span className="custom-gradient">centralized</span>
                <br />
                <span className="span-block">Closed platforms are</span>
                <br />
                <span className="span-block">controlled by a few</span>
                <br />
                <span className="custom-gradient">companies</span>
              </h1>
            </div>
          </section>
          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "100%" }}>
                <span className="custom-gradient">Web3 is</span>
                <br />
                <span className="custom-gradient">decentralized</span>
                <br />
                <span className="span-block">Open protocols are</span>
                <br />
                <span className="span-block">controlled by</span>
                <br />
                <span className="custom-gradient">users</span>
              </h1>
            </div>
          </section>
          <section className="scrollytellingcontainerLast">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "20%" }}>
                <span className="custom-gradient">A new web</span>
                <br />
                <span className="custom-gradient">for a new era</span>
                <br />
                <span className="span-block">Web3 is transforming the</span>
                <br />
                <span className="span-block">infrastructure of the web</span>
                <br />
                <Link href={"/about"}>
                  <input
                    type="button"
                    value="About Web3 Working Group"
                    className="button"
                  />
                </Link>
              </h1>
            </div>
          </section>
        </>
      </PageLayout>
    </>
  );
}
