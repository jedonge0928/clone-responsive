"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { id: 1, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
    { id: 2, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
    { id: 3, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
    { id: 4, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
  ];
  return (
    <div className="w-screen">
      <header className="w-full max-w-[1140px] mx-auto hidden md:flex md:flex-col">
        <div className="justify-between text-[14px] max-w-[1140px] items-center h-[70px] flex">
          <ul className="flex gap-1">
            <li className="relative">회사소개</li>
            <li className="line"></li>
            <li>사회공헌</li>
            <li className="line"></li>
            <li>TMR모집</li>
            <li className="line"></li>
            <li>공시실</li>
            <li className="line"></li>
            <li>소비자포털</li>
            <li className="line"></li>
            <li>다이렉트보험</li>
          </ul>
          <ul className="flex gap-1">
            <li>로그인</li>
            <li className="line"></li>
            <li>인증센터</li>
            <li className="line"></li>
            <li>
              글자크기
              <select name="font-size" id="font-size">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center h-[80px] text-center font-black">
          <h1 className="w-[100px] h-full bg-slate-400 flex items-center justify-center">
            logo
          </h1>
          <nav className="flex">
            <ul className="flex justify-between items-center bg-slate-50-300">
              <li className="p-5">치아.암</li>
              <li className="p-5">건강.정기</li>
              <li className="p-5">치매.간병</li>
              <li className="line after:mx-5 after:py-3"></li>
              <li className="p-5">사이버청구</li>
              <li className="p-5">보험금청구</li>
              <li className="p-5">고객센터</li>
            </ul>
          </nav>
        </div>
      </header>
      {/*모바일*/}
      <header className="md:hidden flex justify-between items-center text-center font-black border-b border-gray-300 p-4">
        <h1 className="text-lg font-bold">라이나 생명</h1>

        <input
          type="text"
          placeholder="검색"
          className="border px-4 py-2 rounded-full border-gray-400"
        />

        <button onClick={() => setIsOpen(!isOpen)}>
          <p>열기</p>
        </button>
        <div
          className={`md:hidden fixed top-0 right-0 w-[35%] h-full border-l border-gray-300 bg-white shadow-lg transform transition-transform duration-300 z-1 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
            ✖
          </button>

          <nav className="mt-20">
            <ul className="flex flex-col gap-4 w-[100%] text-start p-5 ">
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                치아.암
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                건강.정기
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                치매.간병
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                사이버청구
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                보험금청구
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                고객센터
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                회사소개
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                사회공헌
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                TMR모집
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                공시실
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                소비자포털
              </Link>
              <Link href={"/"} className="py-2 hover:bg-gray-200 duration-300">
                다이렉트보험
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <main className="w-full max-w-[1140px] m-auto hidden md:flex md:flex-col">
        <section className="flex  items-center h-[493px] md:flex-col">
          <div className=" flex justify-between  w-full ">
            <div className="w-[753px] y-[394px] p-8 bg-blue-300 rounded-lg shadow-2xl">
              <div className=" flex justify-between ">
                <div className="flex flex-col justify-around gap-5 ">
                  <h2 className="w-full py-3 leading-10">the 건강보험</h2>
                  <h1 className="  leading-10">
                    질병 수술 받을 때마다 매번 보험금 지금
                  </h1>
                  <button className="px-15  rounded-md bg-slate-500 leading-10">
                    보험료 계산/상담
                  </button>
                  <div className="text-xs  leading-10">
                    <p>가입 후 91보장</p>
                    <p>갱신시 보험료 인상 가능</p>
                    <p>준법감시인 확인필 제2024-05-05</p>
                  </div>
                </div>
                <div className="bg-gray-800 w-[260px] h-[330px] text-white">
                  <p>이미지공간입니다.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[367px] h-[394px] p-8 flex flex-col justify-around items-center bg-orange-300 rounded-lg shadow-xl">
                <p>전화상담과 인터넷 가입 모두 가능</p>
                <p>보험이 어려우시다면</p>
                <p>이미지/영상 공간입니다.</p>
                <button>쉬운 보험가입 서비스</button>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="font-black text-2xl mb-6">최근 많이 찾는 보험</h2>
          <div className=" w-full flex items-center justify-between ">
            <ul className="flex items-center w-[751px] h-[224px] justify-between">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="w-[171px] h-[224px] flex justify-center items-center p-8 flex-col gap-2 bg-blue-50 shadow-xl"
                >
                  <h1>이미지</h1>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="w-[368px]  h-[224px] flex justify-center items-center p-8 flex-col gap-2 bg-blue-500 shadow-xl">
              <p>보험 가입 문의</p>
              <div>
                <h2>빠르고 간편하게 보험 가입 상담</h2>
                <p>이미지</p>
              </div>
              <p>080-410-8181</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
