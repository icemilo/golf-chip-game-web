import React from 'react';
const playstoreBtn = require('./img/playstore-button.png');
const appstoreBtn = require('./img/appstore-button.png');

const LandingPage = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>골프 칩 게임</h1>
      </header>

      <section class="nes-container">
        <section class="message-list">
            <section class="message -left">
                <i class="nes-bulbasaur"></i>
                <div class="nes-balloon from-left">
                    <p>야 너 골프 칩 가져왔냐?</p>
                </div>
            </section>

            <section class="message -right">
                <div class="nes-balloon from-right">
                    <p>아.. 까먹었다.</p>
                </div>
                <i class="nes-charmander"></i>
            </section>
            <section class="message -left">
                <i class="nes-bulbasaur"></i>
                <div class="nes-balloon from-left">
                    <p>아..ㅅㅂ 그럴줄 알았다. <a href="#">앱스토어</a>나 <a href="http://play.google.com/store/apps/details?id=com.golfchip.app">구글 플레이스토어</a>가서 "골프칩게임" 검색해봐</p>
                </div>
            </section>
            <section class="message -right">
                <div class="nes-balloon from-right">
                    <p>그런게 있어?</p>
                </div>
                <i class="nes-charmander"></i>
            </section>
            <section class="message -left">
                <i class="nes-bulbasaur"></i>
                <div class="nes-balloon from-left">
                    <p>닥치고, 그냥 앱 다운받고 칩 갖다버려 맨날 까먹을거면!🤬</p>
                </div>
            </section>
        </section>
    </section>

      {/* Download Buttons */}
      <div className="mt-5">
        <a href="http://play.google.com/store/apps/details?id=com.golfchip.app"><img className="android-btn" src={playstoreBtn}></img></a>
        <a href="#"><img className="ios-btn" src={appstoreBtn}></img></a>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} GolfChip.App. All Rights Reserved.<br />Privacy Policy
      </footer>
    </div>
  );
};

export default LandingPage;