import React from "react";

const FooterBar = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center  text-slate-400 p-4">
      <aside>
        <div className="container mx-auto py-6">
          <p className="text-center">
            Released under the MIT License.
            <br />
            Copyright © 2022-present Yusuke Wada & Hono contributors. "kawaii"
            logo is created by SAWARATSUKI.
          </p>
        </div>
      </aside>
    </footer>
  );
};

export default FooterBar;
