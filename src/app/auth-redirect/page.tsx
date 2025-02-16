"use client";

import Button from "@/common/component/Button";
import Modal from "@/common/component/Modal";
import { useEffect } from "react";

const GithubLoginAuthPage = () => {
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&code=${code}`,
        {
          headers: {
            Accept: "application/json",
          },
        },
      );
    })();
  }, []);

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <div>
        <Button>로그인하시겠습니까 ?</Button>
      </div>
    </Modal>
  );
};

export default GithubLoginAuthPage;
