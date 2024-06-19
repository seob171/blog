import PostCard from "@/components/Card/PostCard";
import React from "react";

const PostList = () => {
  return (
    <ul className={"flex flex-col gap-y-4"}>
      {POST_LIST.map((props, index) => {
        return (
          <li key={index}>
            <PostCard {...props} />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;

const POST_LIST = [
  {
    title:
      "튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지",
    description:
      "React Native 앱 개발에 관심이 많으신가요? 사이드 프로젝트를 시작하려고 하지만 어디서부터 시작해야 할지 막막하신가요? 이번 강의는 React Native의 환경 설정부터 앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title: "튜링의 사과 오리지널 강의 ",
    description:
      "React Native 앱 개발에 관심이 많으신가요? 사이드 프로젝트를 시작하려고 하지만 어디서부터 시작해야 할지 막막하신가요? 이번 강의는 React Native의 환경 설정부터 앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title:
      "React Native 크로스플랫폼 앱 개발부터 배포까지튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지",
    description:
      "앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title: "튜링의",
    description: "React Native",
  },
  {
    title:
      "튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지",
    description:
      "React Native 앱 개발에 관심이 많으신가요? 사이드 프로젝트를 시작하려고 하지만 어디서부터 시작해야 할지 막막하신가요? 이번 강의는 React Native의 환경 설정부터 앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title:
      "튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지",
    description:
      "React Native 앱 개발에 관심이 많으신가요? 사이드 프로젝트를 시작하려고 하지만 어디서부터 시작해야 할지 막막하신가요? 이번 강의는 React Native의 환경 설정부터 앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title: "튜링의 사과 오리지널 강의 ",
    description:
      "React Native 앱 개발에 관심이 많으신가요? 사이드 프로젝트를 시작하려고 하지만 어디서부터 시작해야 할지 막막하신가요? 이번 강의는 React Native의 환경 설정부터 앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title:
      "React Native 크로스플랫폼 앱 개발부터 배포까지튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지",
    description:
      "앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
  {
    title: "튜링의",
    description: "React Native",
  },
  {
    title:
      "튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지튜링의 사과 오리지널 강의 - React Native 크로스플랫폼 앱 개발부터 배포까지",
    description:
      "React Native 앱 개발에 관심이 많으신가요? 사이드 프로젝트를 시작하려고 하지만 어디서부터 시작해야 할지 막막하신가요? 이번 강의는 React Native의 환경 설정부터 앱스토어 배포까지의 모든 과정을 살펴보며, 앱 개발의 전체 프로세스를 알아볼 수 있습니다.",
  },
];
