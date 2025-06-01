import { useEffect, useState } from "react";

type Member = (nickname: string) => void;
let nickname = "";
const members = new Set<Member>();

const setNickname = (newNickname: string) => {
  nickname = newNickname;
  members.forEach((cb) => cb(nickname));
};

export function useNickname() {
  const [local, setLocal] = useState(nickname);

  useEffect(() => {
    const cb: Member = (val) => setLocal(val);
    members.add(cb);
    
    return () => {
      members.delete(cb);
    };
  }, []);

  return [local, setNickname] as const;
}
