import { useEffect } from "react";
import PageLayout from "@components/PageLayout";
import CustomGlobalStyle from "@styles/pages/home";
import enterView from "@utils/sticky";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    enterView({
      selector: "section",
      enter: function (el) {
        el.classList.add("entered");
      },
    });

    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const bganimdir = "/images/scrollytelling_v34_comp";

    var loading = new Array();
    loading = [
      "/images/scrollytelling_v34_loading/000.jpg",
      "/images/scrollytelling_v34_loading/001.jpg",
      "/images/scrollytelling_v34_loading/002.jpg",
      "/images/scrollytelling_v34_loading/003.jpg",
      "/images/scrollytelling_v34_loading/004.jpg",
      "/images/scrollytelling_v34_loading/005.jpg",
      "/images/scrollytelling_v34_loading/006.jpg",
      "/images/scrollytelling_v34_loading/007.jpg",
      "/images/scrollytelling_v34_loading/008.jpg",
      "/images/scrollytelling_v34_loading/009.jpg",
      "/images/scrollytelling_v34_loading/010.jpg",
      "/images/scrollytelling_v34_loading/011.jpg",
      "/images/scrollytelling_v34_loading/012.jpg",
      "/images/scrollytelling_v34_loading/013.jpg",
    ];

    var loop1 = new Array();
    loop1 = [
      // `${bganimdir}/045.jpg`,
      `${bganimdir}/046.jpg`,
      `${bganimdir}/047.jpg`,
      `${bganimdir}/048.jpg`,
      `${bganimdir}/049.jpg`,
      `${bganimdir}/050.jpg`,
      `${bganimdir}/051.jpg`,
      `${bganimdir}/052.jpg`,
      `${bganimdir}/053.jpg`,
      `${bganimdir}/054.jpg`,
      `${bganimdir}/055.jpg`,
    ];

    var loop2 = new Array();
    loop2 = [
      // `${bganimdir}/085.jpg`,
      `${bganimdir}/086.jpg`,
      `${bganimdir}/087.jpg`,
      `${bganimdir}/088.jpg`,
      `${bganimdir}/089.jpg`,
      `${bganimdir}/090.jpg`,
      `${bganimdir}/091.jpg`,
      `${bganimdir}/092.jpg`,
      `${bganimdir}/093.jpg`,
      `${bganimdir}/094.jpg`,
      `${bganimdir}/095.jpg`,
    ];

    var loop3 = new Array();
    loop3 = [
      // `${bganimdir}/125.jpg`,
      `${bganimdir}/126.jpg`,
      `${bganimdir}/127.jpg`,
      `${bganimdir}/128.jpg`,
      `${bganimdir}/129.jpg`,
      `${bganimdir}/130.jpg`,
      `${bganimdir}/131.jpg`,
      `${bganimdir}/132.jpg`,
      `${bganimdir}/133.jpg`,
      `${bganimdir}/134.jpg`,
      `${bganimdir}/135.jpg`,
      `${bganimdir}/136.jpg`,
      `${bganimdir}/137.jpg`,
      `${bganimdir}/138.jpg`,
      `${bganimdir}/139.jpg`,
      `${bganimdir}/140.jpg`,
      `${bganimdir}/141.jpg`,
      `${bganimdir}/142.jpg`,
      `${bganimdir}/143.jpg`,
      `${bganimdir}/144.jpg`,
      `${bganimdir}/145.jpg`,
    ];

    var loop4 = new Array();
    loop4 = [
      // `${bganimdir}/175.jpg`,
      `${bganimdir}/176.jpg`,
      `${bganimdir}/177.jpg`,
      `${bganimdir}/178.jpg`,
      `${bganimdir}/179.jpg`,
      `${bganimdir}/180.jpg`,
      `${bganimdir}/181.jpg`,
      `${bganimdir}/182.jpg`,
      `${bganimdir}/183.jpg`,
      `${bganimdir}/184.jpg`,
      `${bganimdir}/185.jpg`,
    ];

    var loop5web2 = new Array();
    loop5web2 = [
      // `${bganimdir}/215.jpg`,
      `${bganimdir}/216.jpg`,
      `${bganimdir}/217.jpg`,
      `${bganimdir}/218.jpg`,
      `${bganimdir}/219.jpg`,
      `${bganimdir}/220.jpg`,
      `${bganimdir}/221.jpg`,
      `${bganimdir}/222.jpg`,
      `${bganimdir}/223.jpg`,
      `${bganimdir}/224.jpg`,
      `${bganimdir}/225.jpg`,
    ];

    var loop6btc = new Array();
    loop6btc = [
      // `${bganimdir}/240.jpg`,
      `${bganimdir}/241.jpg`,
      `${bganimdir}/242.jpg`,
      `${bganimdir}/243.jpg`,
      `${bganimdir}/244.jpg`,
      `${bganimdir}/245.jpg`,
      `${bganimdir}/246.jpg`,
      `${bganimdir}/247.jpg`,
      `${bganimdir}/248.jpg`,
      `${bganimdir}/249.jpg`,
      `${bganimdir}/250.jpg`,
    ];

    var loop7web3 = new Array();
    loop7web3 = [
      `${bganimdir}/270.jpg`,
      `${bganimdir}/271.jpg`,
      `${bganimdir}/272.jpg`,
      `${bganimdir}/273.jpg`,
      `${bganimdir}/274.jpg`,
      `${bganimdir}/275.jpg`,
      `${bganimdir}/276.jpg`,
      `${bganimdir}/277.jpg`,
      `${bganimdir}/278.jpg`,
      `${bganimdir}/279.jpg`,
      `${bganimdir}/280.jpg`,
      `${bganimdir}/281.jpg`,
      `${bganimdir}/282.jpg`,
      `${bganimdir}/283.jpg`,
      `${bganimdir}/284.jpg`,
      `${bganimdir}/285.jpg`,
    ];

    const frameCount = 285;
    const currentFrame = (index) =>
      `/images/scrollytelling_v34_comp/${index
        .toString()
        .padStart(3, "0")}.jpg`;

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

    return () => window.removeEventListener("click", handleEventListener);
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
          <canvas id="hero-lightpass">Not supported in your browser</canvas>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "0%" }}>
                An era-defining technological revolution is underway
              </h1>
              <i>Scroll to continue</i>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "70%" }}>
                The printing press introduced mass publishing
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "70%" }}>
                The telegraph and telephone connected people around the world
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "70%" }}>
                Broadcast sent radio and television everywhere
              </h1>
            </div>
          </section>

          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <h1 style={{ marginBottom: "70%" }}>
                The Web brought publishing, communication and broadcast to
                everyone
              </h1>
            </div>
          </section>
          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <p style={{ marginBottom: "0%", marginTop: "0%" }}>
                But it's become centralized
              </p>
              <h1 style={{ marginBottom: "70%" }}>
                Closed platforms are controlled by a few companies
              </h1>
            </div>
          </section>
          <section className="scrollytellingcontainer">
            <div className="scrollytellingcontent">
              <p style={{ marginBottom: "0%", marginTop: "0%" }}>
                Web3 is decentralized
              </p>
              <h1 style={{ marginBottom: "70%" }}>
                Open protocols are controlled by users
              </h1>
            </div>
          </section>
          <section className="scrollytellingcontainerLast">
            <div className="scrollytellingcontent">
              <p style={{ marginBottom: "0%" }}>A new web for a new era</p>
              <h1 style={{ marginBottom: "20%" }}>
                Web3 is transforming the infrastructure of the web
                <br />
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
