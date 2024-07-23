import {
  Box,
  Image,
  Textarea,
  Text,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React from "react";

const AitoLandingTemplate = () => {
  return (
    <Box
      width="100dvw"
      display="flex"
      flexDirection="column"
      margin={0}
      padding={0}
    >
      <Box className="a" width="100%" height="70px" display="flex">
        <Box
          className="aa"
          width={["265px", "530px", "807px"]}
          height="70px"
          display="flex"
          alignItems="center"
        >
          <Box
            className="aaa"
            width={["81px", "162px", "256px"]}
            height="70px"
            display="flex"
            justifyContent="center"
            alignItems="end"
          >
            <Box
              className="aaaa"
              width={["53.33px", "106.67px", "160px"]}
              height="45px"
            >
              <img width="100%" height="100%" src="./images/aito-logo.webp" />
            </Box>
          </Box>
          <Box
            className="aab"
            // width={["180px,"360px","551px"]}
            width={["100%", "100%", "551px"]}
            height="20px"
            display="flex"
            alignItems="end"
            justifyContent={"center"}
            marginTop="17px"
          >
            <Box
              className="aaba"
              // width={["100%", "100%", "551px"]}
              width={"100%"}
              height="17px"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                className="AItoとは"
                width={["18px", "36px", "62px"]}
                height="17px"
                fontSize="14px"
                fontWeight="bold"
              >
                AItoとは
              </Box>
              <Box
                className="特徴"
                width={["9px", "18px", "34px"]}
                height="17px"
                fontSize="14px"
                fontWeight="bold"
                letterSpacing="1px"
              >
                特徴
              </Box>
              <Box
                className="サービス紹介"
                width={["27px", "54px", "93px"]}
                height="17px"
                fontSize="14px"
                fontWeight="bold"
                letterSpacing="1px"
              >
                サービス紹介
              </Box>
              <Box
                className="導入事例"
                width={["18px", "36px", "63px"]}
                height="17px"
                fontSize="14px"
                fontWeight="bold"
                letterSpacing="1px"
              >
                導入事例
              </Box>
              <Box
                className="よくあるご質問"
                width={["36px", "72px", "108px"]}
                height="17px"
                fontSize="14px"
                fontWeight="bold"
                letterSpacing="1px"
              >
                よくあるご質問
              </Box>
              <Box
                className="お役立ち記事"
                width={["30px", "60px", "90px"]}
                height="17px"
                fontSize="14px"
                fontWeight="bold"
                letterSpacing="1px"
              >
                お役立ち記事
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="ab"
        width={["211px", "422px", "633px"]}
        height="70px"
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Box
          className="aba"
          width={["128px", "257px", "386px"]}
          height="42px"
          display="flex"
        >
          <Box
            className="aba1"
            width={["53px", "106px", "160px"]}
            height="41px"
            color="#37a235"
            border="solid 1px #37a235"
            borderRadius="30px"
            textAlign="center"
            fontWeight="bold"
            lineHeight="40px"
            fontSize="14px"
            marginRight="18px"
          >
            資料請求
          </Box>
          <Box
            className="aba2"
            backgroundColor="#37a235"
            color="#fff"
            width={["53.33px", "106.67px", "160px"]}
            height="42px"
            borderRadius="30px"
            textAlign="center"
            fontWeight="bold"
            lineHeight="40px"
            fontSize="14px"
          >
            お問い合わせ
          </Box>
        </Box>
      </Box>
      <Box
        className="b"
        width="100%"
        height="563px"
        display="flex"
        justifyContent="center"
        marginTop="92px"
      >
        <Box
          className="ba"
          width="100%"
          height="563px"
          display="flex"
          justifyContent="center"
        >
          <Box
            className="ba-left"
            width={["100%", "100%", "100%"]}
            height="563px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="-14px"
          >
            <Box className="ba-left-Box" width="100%" height="368px">
              <Box className="ba-left-Box1" width="100%" height="89px">
                <Box
                  className="ba-left-Box1-inside"
                  width={["100px", "200px", "300px"]}
                  height="89px"
                >
                  <img
                    width="100%"
                    height="100%"
                    src="./images/aito-logo.webp"
                    alt="Aito Logo"
                  />
                </Box>
              </Box>
              <Box
                className="ba-left-Box2"
                color="#646565"
                width="100%"
                height="30px"
                marginTop="4px"
                fontWeight="bold"
                fontSize="17px"
                letterSpacing="1px"
                lineHeight="28px"
              >
                カスタマーサポートを自動化するAIエージェント
              </Box>
              <Box
                className="ba-left-Box3"
                width="100%"
                height="134px"
                marginTop="33px"
                fontWeight="bold"
                fontSize="47px"
                letterSpacing="1px"
                lineHeight="65px"
              >
                カスタマーサポートから
                <br />
                カスタマーサクセスへ
              </Box>
              <Box
                className="ba-left-Box4"
                width="100%"
                height="48px"
                marginTop="30px"
              >
                <Box
                  className="ba-left-Box4-inside"
                  width="100%"
                  height="48px"
                  display="flex"
                >
                  <Box
                    className="ba-left-Box4-inside1"
                    width={["66.67px", "133.33px", "200px"]}
                    height="43px"
                    color="#37a235"
                    border="solid 1px #37a235"
                    borderRadius="30px"
                    textAlign="center"
                    fontWeight="bold"
                    lineHeight="40px"
                    fontSize="16px"
                    paddingTop="4px"
                    marginRight="10px"
                  >
                    資料請求
                  </Box>
                  <Box
                    className="ba-left-Box4-inside2"
                    backgroundColor="#37a235"
                    width={["66.67px", "133.33px", "200px"]}
                    height="44px"
                    color="#fff"
                    borderRadius="30px"
                    textAlign="center"
                    fontWeight="bold"
                    lineHeight="40px"
                    fontSize="16px"
                    paddingTop="4px"
                  >
                    お問い合わせ
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="ba-right"
            width={["100%", "100%", "50%"]}
            height="563px"
          >
            <img
              width="100%"
              height="100%"
              src="./images/img-1.webp"
              alt="AI Agent"
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="c"
        backgroundColor="pink"
        width="100%"
        height="78px"
        marginTop="88px"
      ></Box>
      <Box
        className="d"
        width="100%"
        height="460px"
        marginTop="122px"
        display="flex"
        justifyContent="center"
      >
        <Box
          className="da"
          width={["395px", "790px", "1185px"]}
          height="460px"
          display="flex"
          justifyContent="space-between"
        >
          <Box
            className="da-left"
            width={["238.33px", "476.67px", "715px"]}
            height="381px"
            display="flex"
            flexDirection="column"
          >
            <Box
              className="da-left1"
              height="50px"
              fontWeight="bold"
              fontSize="32px"
            >
              AItoとは
            </Box>
            <Box
              className="da-left2"
              color="#999"
              height="22px"
              marginTop="12px"
              fontWeight="bold"
              fontSize="14px"
            >
              about
            </Box>
            <Box
              className="da-left3"
              height="101px"
              marginTop="50px"
              fontWeight="bold"
              fontSize="30px"
              lineHeight="47px"
              letterSpacing="2px"
            >
              カスタマーサポートを自動化するAIエージェント
              <br />
              AIと、ともに働く未来のカスタマーサポートへ
            </Box>
            <Box className="da-left4" height="29px" marginTop="20px">
              「AIto」は、カスタマーサポートを自動化するAIエージェントです。
            </Box>
            <Box
              className="da-left5"
              height="86px"
              marginTop="10px"
              lineHeight="28px"
            >
              単なるAI自動応答ツールではなく、CSチームの一員として一緒に業務を行う仲間です。AIとともに
              <br />
              働く、まったく新しいカスタマーサポートへと業務そのものを変革します。
              <br />
              AItoは自律型サポートAIとして、あらゆるカスタマーサポート業務の自動化を実現します。
            </Box>
          </Box>
          <Box
            className="da-right"
            width={["138px", "276px", "414px"]}
            height="100%"
            display="flex"
            alignItems="flex-end"
          >
            <Box
              className="da-right-inside"
              width={["138px", "276px", "414px"]}
              height="406px"
            >
              <img
                width="100%"
                height="100%"
                src="./images/img-2.webp"
                alt="AIto illustration"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="e"
        backgroundColor="#f9f9f9"
        width="100%"
        height="457px"
        display="flex"
        justifyContent="center"
        marginTop="95px"
      >
        <Box
          className="ea"
          width={["160px", "320px", "480px"]}
          height="341px"
          marginTop="48px"
          marginBottom="68px"
          display="flex"
          flexDirection="column"
        >
          <Box
            className="eaa"
            width="100%"
            height="50px"
            display="flex"
            justifyContent="center"
          >
            <Box
              className="eaaa"
              width={["139.33px", "278.67px", "418px"]}
              height="50px"
              fontWeight="bold"
              fontSize="35px"
            >
              1分30秒でわかる「AIto」
            </Box>
          </Box>
          <Box
            className="eab"
            backgroundColor="#fff"
            width="100%"
            height="271px"
            marginTop="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              className="eac"
              width={["26.67px", "53.33px", "80px"]}
              height="70px"
            >
              <img
                width="100%"
                height="100%"
                src="./images/youtube.webp"
                alt="YouTube thumbnail"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="f"
        width="100%"
        height="1280px"
        display="flex"
        justifyContent="center"
        marginTop="96px"
      >
        <Box
          className="fa"
          width={["394.33px", "788.67px", "1183px"]}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            className="faa"
            width="100%"
            height="85px"
            display="flex"
            justifyContent="center"
          >
            <Box
              className="faaa"
              width={["168.33px", "336.67px", "505px"]}
              height="85px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                className="faaa1"
                height="50px"
                fontWeight="bold"
                fontSize="34px"
                letterSpacing="1px"
              >
                AIエージェント「AIto」の特徴
              </Box>
              <Box
                className="faaa2"
                color="#999"
                width={["20.67px", "41.33px", "62px"]}
                height="22px"
                fontWeight="bold"
                fontSize="14px"
                marginTop="13px"
              >
                features
              </Box>
            </Box>
          </Box>
          <Box
            className="fab"
            width={["394.33px", "788.67px", "1183px"]}
            height="1047px"
            marginTop="49px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              className="faba"
              width="100%"
              height="507px"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                className="faba-Box"
                backgroundColor="#f9f9f9"
                width={["192px", "384px", "576px"]}
                height="507px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  className="faba-Box-inside"
                  width={["171px", "342px", "513px"]}
                  height="461px"
                >
                  <Box
                    className="faba-Box-inside-top"
                    width={["171px", "342px", "513px"]}
                    height="190px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box
                      className="faba-Box-inside-top1"
                      width={["26.67px", "53.33px", "80px"]}
                      height="26px"
                    >
                      POINT.01
                    </Box>
                    <Box
                      className="faba-Box-inside-top2"
                      width={["106.67px", "213.33px", "320px"]}
                      height="33px"
                      marginTop="10px"
                      fontSize="23px"
                      fontWeight="bold"
                      letterSpacing="1px"
                      textAlign="center"
                    >
                      マルチチャネル
                    </Box>
                    <Box
                      className="faba-Box-inside-top3"
                      width={["171px", "342px", "513px"]}
                      height="86px"
                      marginTop="13px"
                      lineHeight="30px"
                    >
                      単一のユーザーインターフェース（シングルチャネル）ではなく、チャット、電話、メール、Webページなど、あらゆるサポートチャネルに対応しています。今後もチャネルは拡張予定です。
                    </Box>
                  </Box>
                  <Box className="faba-Box-inside-botom">
                    <img
                      width="100%"
                      height="100%"
                      src="./images/img-3.webp"
                      alt="マルチチャネル"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="faba-Box"
                backgroundColor="#f9f9f9"
                width={["192px", "384px", "576px"]}
                height="507px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  className="faba-Box-inside"
                  width={["171px", "342px", "513px"]}
                  height="461px"
                >
                  <Box
                    className="faba-Box-inside-top"
                    width={["171px", "342px", "513px"]}
                    height="190px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box
                      className="faba-Box-inside-top1"
                      width={["26.67px", "53.33px", "80px"]}
                      height="26px"
                    >
                      POINT.02
                    </Box>
                    <Box
                      className="faba-Box-inside-top2"
                      width={["106.67px", "213.33px", "320px"]}
                      height="33px"
                      marginTop="10px"
                      fontSize="23px"
                      fontWeight="bold"
                      letterSpacing="1px"
                      textAlign="center"
                    >
                      最適なLLM選定
                    </Box>
                    <Box
                      className="faba-Box-inside-top3"
                      width={["171px", "342px", "513px"]}
                      height="86px"
                      marginTop="13px"
                      lineHeight="30px"
                    >
                      ChatGPTやClaudeをはじめとする大規模言語モデルを活用し、柔軟で自然かつ精度の高い顧客サポートを実現します。独自LLM開発や1社に偏ったLLM選定をせず、常に最適なLLMを利用できます。
                    </Box>
                  </Box>
                  <Box className="faba-Box-inside-botom">
                    <img
                      width="100%"
                      height="100%"
                      src="./images/img-4.webp"
                      alt="最適なLLM選定"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="faba"
              width="100%"
              height="507px"
              display="flex"
              justifyContent="space-between"
            >
              <Box
                className="faba-Box"
                backgroundColor="#f9f9f9"
                width={["192px", "384px", "576px"]}
                height="507px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  className="faba-Box-inside"
                  width={["171px", "342px", "513px"]}
                  height="461px"
                >
                  <Box
                    className="faba-Box-inside-top"
                    height="190px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box
                      className="faba-Box-inside-top1"
                      width={["26.67px", "53.33px", "80px"]}
                      height="26px"
                    >
                      POINT.03
                    </Box>
                    <Box
                      className="faba-Box-inside-top2"
                      width={["106.67px", "213.33px", "320px"]}
                      height="33px"
                      marginTop="10px"
                      fontSize="23px"
                      fontWeight="bold"
                      letterSpacing="1px"
                      textAlign="center"
                    >
                      共通ナレッジデータベース
                    </Box>
                    <Box
                      className="faba-Box-inside-top3"
                      height="86px"
                      marginTop="13px"
                      lineHeight="30px"
                    >
                      AIによる顧客サポートを実現するための基盤になる最適なナレッジデータベースを備えています。サポートチャネルごとに異なるツールを使用することによるナレッジの二重三重管理を防ぎます。
                    </Box>
                  </Box>
                  <Box className="faba-Box-inside-botom">
                    <img
                      width="100%"
                      height="100%"
                      src="./images/img-5.webp"
                      alt="共通ナレッジデータベース"
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                className="faba-Box"
                backgroundColor="#f9f9f9"
                width={["192px", "384px", "576px"]}
                height="507px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  className="faba-Box-inside"
                  width={["171px", "342px", "513px"]}
                  height="461px"
                >
                  <Box
                    className="faba-Box-inside-top"
                    height="190px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box
                      className="faba-Box-inside-top1"
                      width={["26.67px", "53.33px", "80px"]}
                      height="26px"
                    >
                      POINT.04
                    </Box>
                    <Box
                      className="faba-Box-inside-top2"
                      width={["106.67px", "213.33px", "320px"]}
                      height="33px"
                      marginTop="10px"
                      fontSize="23px"
                      fontWeight="bold"
                      letterSpacing="1px"
                      textAlign="center"
                    >
                      RAG/AIエージェント
                    </Box>
                    <Box
                      className="faba-Box-inside-top3"
                      width={["171px", "342px", "513px"]}
                      height="86px"
                      marginTop="13px"
                      lineHeight="30px"
                    >
                      RAG（Retrieval-Augmented Generation - 検索拡張生成 -
                      ）技術やAIエージェント技術を取り入れ、自社データ活用およびAIの制御を可能にします。実用的な自律型サポートAIを目指しています。
                    </Box>
                  </Box>
                  <Box className="faba-Box-inside-botom">
                    <img
                      width="100%"
                      height="100%"
                      src="./images/img-6.webp"
                      alt="RAG/AIエージェント"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="g"
        backgroundColor="#f9f9f9"
        width="100%"
        height="2056px"
        display="flex"
        justifyContent="center"
      >
        <Box
          className="ga"
          width={["395px", "790px", "1185px"]}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            className="gaa"
            width="100%"
            height="85px"
            display="flex"
            justifyContent="center"
            marginTop="96px"
          >
            <Box
              className="gaaa"
              width={["133.33px", "266.67px", "400px"]}
              height="85px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                className="gaaa1"
                width={["133.33px", "266.67px", "400px"]}
                height="51px"
                fontSize="33px"
                fontWeight="bold"
                letterSpacing="1px"
              >
                「AIto」のサービス紹介
              </Box>
              <Box
                className="gaaa2"
                color="#999"
                width={["18px", "36px", "54px"]}
                height="22px"
                marginTop="12px"
                fontWeight="bold"
                fontSize="14px"
              >
                service
              </Box>
            </Box>
          </Box>
          <Box
            className="gab"
            width={["395px", "790px", "1185px"]}
            height="1755px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            marginTop="23px"
          >
            <Box
              className="gab-Box枠"
              backgroundColor="#fff"
              width="100%"
              height="420px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
            >
              <Box
                className="gab-Box"
                width={["353.67px", "707.33px", "1061px"]}
                height="292px"
                display="flex"
              >
                <Box
                  className="gab-Box-reft"
                  width={["151.33px", "302.67px", "454px"]}
                  height="100%"
                >
                  <img
                    width="100%"
                    height="100%"
                    src="./images/img-7.webp"
                    alt="RAG型AIチャットボット"
                  />
                </Box>
                <Box
                  className="gab-Box-right"
                  width={["189px", "378px", "567px"]}
                  height="292px"
                  display="flex"
                  alignItems="center"
                  marginLeft="40px"
                >
                  <Box
                    className="gab-Box-right-inside"
                    width={["189px", "378px", "567px"]}
                    height="262px"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      className="gab-Box-right-inside1"
                      color="#575757"
                      width={["60px", "120px", "180px"]}
                      height="22px"
                      fontWeight="bold"
                      fontSize="15px"
                    >
                      RAG型AIチャットボット
                    </Box>
                    <Box
                      className="gab-Box-right-inside2"
                      width={["123.33px", "246.67px", "370px"]}
                      height="43px"
                      marginTop="4px"
                      display="flex"
                      alignItems="flex-end"
                    >
                      <Box
                        className="gab-Box-right-inside2-左"
                        width={["73.33px", "146.67px", "220px"]}
                        height="100%"
                      >
                        <img
                          width="100%"
                          height="100%"
                          src="./images/img-11.webp"
                          alt="アイトチャット"
                        />
                      </Box>
                      <Box
                        className="gab-Box-right-inside2-右"
                        color="#999"
                        width={["50px", "100px", "150px"]}
                        height="20px"
                        fontWeight="bold"
                        fontSize="14px"
                        marginBottom="7px"
                      >
                        アイトチャット
                      </Box>
                    </Box>
                    <Box
                      className="gab-Box-right-inside3"
                      width={["189px", "378px", "567px"]}
                      height="116px"
                      marginTop="16px"
                      lineHeight="28px"
                    >
                      「AItoChat」は、RAG技術とLLMを組み合わせた従来型とは全く異なる新世代型AIチャットボットです。自社ナレッジをデータベース化し、ユーザーの質問や発言内容に合わせてナレッジデータを検索し、検索結果を元にAIが最適な回答を生成します。
                    </Box>
                    <Box
                      className="gab-Box-right-inside4"
                      backgroundColor="#393939"
                      color="#fff"
                      width={["63.33px", "126.67px", "190px"]}
                      height="38px"
                      marginTop="24px"
                      borderRadius="30px"
                      textAlign="center"
                      lineHeight="37px"
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      サービスサイトへ→
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="gab-Box枠"
              backgroundColor="#fff"
              width={["395px", "790px", "1185px"]}
              height="420px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="10px"
            >
              <Box
                className="gab-Box"
                width={["353.67px", "707.33px", "1061px"]}
                height="292px"
                display="flex"
              >
                <Box
                  className="gab-Box-reft"
                  width={["151.33px", "302.67px", "454px"]}
                  height="100%"
                >
                  <img
                    width="100%"
                    height="100%"
                    src="./images/img-8.webp"
                    alt="AI型FAQ検索システム"
                  />
                </Box>
                <Box
                  className="gab-Box-right"
                  width={["189px", "378px", "567px"]}
                  height="292px"
                  display="flex"
                  alignItems="center"
                  marginLeft="40px"
                >
                  <Box
                    className="gab-Box-right-inside"
                    width="100%"
                    height="262px"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      className="gab-Box-right-inside1"
                      color="#575757"
                      width={["60px", "120px", "180px"]}
                      height="22px"
                      fontWeight="bold"
                      fontSize="15px"
                    >
                      AI型FAQ検索システム
                    </Box>
                    <Box
                      className="gab-Box-right-inside2"
                      width={["123.33px", "246.67px", "370px"]}
                      height="43px"
                      marginTop="4px"
                      display="flex"
                      alignItems="flex-end"
                    >
                      <Box
                        className="gab-Box-right-inside2-左"
                        width={["73.33px", "146.67px", "220px"]}
                        height="100%"
                      >
                        <img
                          width="100%"
                          height="100%"
                          src="./images/img-12.webp"
                          alt="アイトエフエーキュー"
                        />
                      </Box>
                      <Box
                        className="gab-Box-right-inside2-右"
                        //
                        //   color="#999"
                        //   width={["50px", "100px", "150px"]}
                        //   height="20px"
                        //   fontWeight="bold"
                        //   fontSize="14px"
                        //   marginBottom="7px"
                        //
                      >
                        アイトエフエーキュー
                      </Box>
                    </Box>
                    <Box
                      className="gab-Box-right-inside3"
                      //
                      //   width={["189px", "378px", "567px"]}
                      //   height="116px"
                      //   marginTop="16px"
                      //   lineHeight="28px"
                      //
                    >
                      「AItoFAQ」は、自然言語（普段の書き言葉･話し言葉）で検索ができるFAQ検索システムです。検索エンジンと同じく、知りたいことを入力するだけで簡単に知りたい情報を見つけることができます。検索結果と合わせて、AI回答生成機能も利用できます。
                    </Box>
                    <Box
                      className="gab-Box-right-inside4"
                      //
                      //   backgroundColor="#393939"
                      //   color="#fff"
                      //   width={["63.33px", "126.67px", "190px"]}
                      //   height="38px"
                      //   marginTop="24px"
                      //   borderRadius="30px"
                      //   textAlign="center"
                      //   lineHeight="37px"
                      //   fontWeight="bold"
                      //   fontSize="14px"
                      //
                    >
                      サービスサイトへ→
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="gab-Box枠"
              //
              //   backgroundColor="#fff"
              //   width={["395px", "790px", "1185px"]}
              //   height="420px"
              //   display="flex"
              //   justifyContent="center"
              //   alignItems="center"
              //   borderRadius="10px"
              //
            >
              <Box
                className="gab-Box"
                width={["353.67px", "707.33px", "1061px"]}
                height="292px"
                display="flex"
              >
                <Box
                  className="gab-Box-reft"
                  //
                  //   width={["151.33px", "302.67px", "454px"]}
                  //   height="100%"
                  //
                >
                  <img
                    width="100%"
                    height="100%"
                    src="./images/img-9.webp"
                    alt="AI型ボイスボット"
                  />
                </Box>
                <Box
                  className="gab-Box-right"
                  //
                  //   width={["189px", "378px", "567px"]}
                  //   height="292px"
                  //   display="flex"
                  //   alignItems="center"
                  //   marginLeft="40px"
                  //
                >
                  <Box
                    className="gab-Box-right-inside"
                    width={["189px", "378px", "567px"]}
                    height="262px"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      className="gab-Box-right-inside1"
                      //
                      //   color="#575757"
                      //   width={["60px", "120px", "180px"]}
                      //   height="22px"
                      //   fontWeight="bold"
                      //   fontSize="15px"
                      //
                    >
                      AI型ボイスボット
                    </Box>
                    <Box
                      className="gab-Box-right-inside2"
                      //
                      //   width={["123.33px", "246.67px", "370px"]}
                      //   height="43px"
                      //   marginTop="4px"
                      //   display="flex"
                      //   alignItems="flex-end"
                      //
                    >
                      <Box
                        className="gab-Box-right-inside2-左"
                        //
                        //   width={["73.33px", "146.67px", "220px"]}
                        //   height="100%"
                        //
                      >
                        <img
                          width="100%"
                          height="100%"
                          src="./images/img-13.webp"
                          alt="アイトボイス"
                        />
                      </Box>
                      <Box
                        className="gab-Box-right-inside2-右"
                        //
                        //   color="#999"
                        //   width={["50px", "100px", "150px"]}
                        //   height="20px"
                        //   fontWeight="bold"
                        //   fontSize="14px"
                        //   marginBottom="7px"
                        //
                      >
                        アイトボイス
                      </Box>
                    </Box>
                    <Box
                      className="gab-Box-right-inside3"
                      //
                      //   width={["189px", "378px", "567px"]}
                      //   height="116px"
                      //   marginTop="16px"
                      //   lineHeight="28px"
                      //
                    >
                      「AItoVoice」は、LLMとSTT（音声認識）･TTS（音声合成）技術を組み合わせたAIボイスボットサービスです。電話回線を通じて、自社ナレッジデータに基づいた会話で顧客の疑問やお問い合わせを解決します。
                    </Box>
                    <Box
                      className="gab-Box-right-inside4-準備中…"
                      backgroundColor="#393939"
                      color="#999"
                      width={["34.67px", "69.33px", "104px"]}
                      height="38px"
                      borderRadius="30px"
                      textAlign="center"
                      lineHeight="37px"
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      準備中…
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              className="gab-Box枠"
              //
              //   backgroundColor="#fff"
              //   width={["395px", "790px", "1185px"]}
              //   height="420px"
              //   display="flex"
              //   justifyContent="center"
              //   alignItems="center"
              //   borderRadius="10px"
              //
            >
              <Box
                className="gab-Box"
                width={["353.67px", "707.33px", "1061px"]}
                height="292px"
                display="flex"
              >
                <Box
                  className="gab-Box-reft"
                  width={["151.33px", "302.67px", "454px"]}
                  height="100%"
                >
                  <img
                    width="100%"
                    height="100%"
                    src="./images/img-10.webp"
                    alt="AI自動メール返信システム"
                  />
                </Box>
                <Box
                  className="gab-Box-right"
                  width={["189px", "378px", "567px"]}
                  height="292px"
                  display="flex"
                  alignItems="center"
                  marginLeft="40px"
                >
                  <Box
                    className="gab-Box-right-inside"
                    width={["189px", "378px", "567px"]}
                    height="262px"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box
                      className="gab-Box-right-inside1"
                      color="#575757"
                      width={["60px", "120px", "180px"]}
                      height="22px"
                      fontWeight="bold"
                      fontSize="15px"
                    >
                      AI自動メール返信システム
                    </Box>
                    <Box
                      className="gab-Box-right-inside2"
                      width={["123.33px", "246.67px", "370px"]}
                      height="43px"
                      marginTop="4px"
                      display="flex"
                      alignItems="flex-end"
                    >
                      <Box
                        className="gab-Box-right-inside2-左"
                        width={["73.33px", "146.67px", "220px"]}
                        height="100%"
                      >
                        <img
                          width="100%"
                          height="100%"
                          src="./images/img-14.webp"
                          alt="アイトメール"
                        />
                      </Box>
                      <Box
                        className="gab-Box-right-inside2-右"
                        color="#999"
                        width={["50px", "100px", "150px"]}
                        height="20px"
                        fontWeight="bold"
                        fontSize="14px"
                        marginBottom="7px"
                      >
                        アイトメール
                      </Box>
                    </Box>
                    <Box
                      className="gab-Box-right-inside3"
                      width={["189px", "378px", "567px"]}
                      height="116px"
                      marginTop="16px"
                      lineHeight="28px"
                    >
                      「AItoMail」は、ありそうでなかった全く新しいAIによるメール自動返信システムです。お客様からのお問い合わせメールに対して、ナレッジデータに基づいた最適なメール返信文を自動生成し、迅速に送信します（下書き機能もあります）。
                    </Box>
                    <Box
                      className="gab-Box-right-inside4"
                      backgroundColor="#393939"
                      color="#fff"
                      width={["63.33px", "126.67px", "190px"]}
                      height="38px"
                      marginTop="24px"
                      borderRadius="30px"
                      textAlign="center"
                      lineHeight="37px"
                      fontWeight="bold"
                      fontSize="14px"
                    >
                      サービスサイトへ→
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="h"
        width="100%"
        height="282px"
        display="flex"
        justifyContent="center"
        marginTop="121px"
      >
        <Box
          className="ha"
          width={["395px", "790px", "1185px"]}
          height="282px"
          display="flex"
          justifyContent="space-between"
        >
          <Box
            className="ha-Box"
            backgroundColor="#fff"
            width={["123.67px", "247.33px", "371px"]}
            height="282px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            boxShadow="2px 2px 5px rgba(0, 0, 0, 0.3)"
          >
            <Box
              className="ha-Box-inside"
              width={["73.67px", "147.33px", "221px"]}
              height="218px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box
                className="ha-Box-inside1"
                width={["17px", "34px", "51px"]}
                height="50px"
              >
                <img
                  width="100%"
                  height="100%"
                  src="./images/mini-1.webp"
                  alt="無料トライアル"
                />
              </Box>
              <Box
                className="ha-Box-inside2"
                width={["73.67px", "147.33px", "221px"]}
                height="33px"
                marginTop="12px"
                fontWeight="bold"
                fontSize="21px"
                letterSpacing="2px"
              >
                無料トライアル実施
              </Box>
              <Box
                className="ha-Box-inside3"
                width={["65.33px", "130.67px", "196px"]}
                height="49px"
                marginTop="13px"
                fontSize="13px"
                lineHeight="24px"
              >
                無料トライアルを開始して
                <br />
                AItoの効果を実感してください
              </Box>
              <Box
                className="ha-Box-inside4"
                backgroundColor="#37a235"
                color="#fff"
                width={["49px", "98px", "147px"]}
                height="35px"
                marginTop="25px"
                fontSize="13px"
                borderRadius="30px"
                lineHeight="33px"
                fontWeight="bold"
              >
                いますぐ試す
              </Box>
            </Box>
          </Box>
          <Box
            className="ha-Box"
            backgroundColor="#fff"
            width={["123.67px", "247.33px", "371px"]}
            height="282px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            boxShadow="2px 2px 5px rgba(0, 0, 0, 0.3)"
          >
            <Box
              className="ha-Box-inside"
              width={["73.67px", "147.33px", "221px"]}
              height="218px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box
                className="ha-Box-inside1"
                width={["17px", "34px", "51px"]}
                height="50px"
              >
                <img
                  width="100%"
                  height="100%"
                  src="./images/mini-2.webp"
                  alt="デモを見る"
                />
              </Box>
              <Box
                className="ha-Box-inside2"
                width={["73.67px", "147.33px", "221px"]}
                height="33px"
                marginTop="12px"
                fontWeight="bold"
                fontSize="21px"
                letterSpacing="2px"
              >
                デモを見てみる
              </Box>
              <Box
                className="ha-Box-inside3"
                width={["65.33px", "130.67px", "196px"]}
                height="49px"
                marginTop="13px"
                fontSize="13px"
                lineHeight="24px"
              >
                AItoのデモを見て導入の
                <br />
                メリットを確認しましょう
              </Box>
              <Box
                className="ha-Box-inside4"
                backgroundColor="#37a235"
                color="#fff"
                width={["49px", "98px", "147px"]}
                height="35px"
                marginTop="25px"
                fontSize="13px"
                borderRadius="30px"
                lineHeight="33px"
                fontWeight="bold"
              >
                お問い合わせする
              </Box>
            </Box>
          </Box>
          <Box
            className="ha-Box"
            backgroundColor="#fff"
            width={["123.67px", "247.33px", "371px"]}
            height="282px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            boxShadow="2px 2px 5px rgba(0, 0, 0, 0.3)"
          >
            <Box
              className="ha-Box-inside"
              width={["73.67px", "147.33px", "221px"]}
              height="218px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box
                className="ha-Box-inside1"
                width={["17px", "34px", "51px"]}
                height="50px"
              >
                <img
                  width="100%"
                  height="100%"
                  src="./images/mini-3.webp"
                  alt="資料請求"
                />
              </Box>
              <Box
                className="ha-Box-inside2"
                width={["73.67px", "147.33px", "221px"]}
                height="33px"
                marginTop="12px"
                fontWeight="bold"
                fontSize="21px"
                letterSpacing="2px"
              >
                無料トライアル実施
              </Box>
              <Box
                className="ha-Box-inside3"
                width={["65.33px", "130.67px", "196px"]}
                height="49px"
                marginTop="13px"
                fontSize="13px"
                lineHeight="24px"
              >
                資料請求でAItoの詳細をチェック
                <br />
                お問い合わせはこちら
              </Box>
              <Box
                className="ha-Box-inside4"
                backgroundColor="#37a235"
                color="#fff"
                width={["49px", "98px", "147px"]}
                height="35px"
                marginTop="25px"
                fontSize="13px"
                borderRadius="30px"
                lineHeight="33px"
                fontWeight="bold"
              >
                お問い合わせする
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="i"
        width="100%"
        height="591px"
        display="flex"
        justifyContent="center"
        marginTop="198px"
      >
        <Box
          className="ia"
          width={["346.67px", "693.33px", "1040px"]}
          height="591px"
          display="flex"
          flexDirection="column"
        >
          <Box
            className="iaa"
            width="100%"
            height="132px"
            display="flex"
            justifyContent="center"
          >
            <Box
              className="iaaa"
              width={["97.33px", "194.67px", "292px"]}
              height="132px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box
                className="iaaa1"
                width={["51px", "102px", "153px"]}
                height="51px"
                fontWeight="bold"
                fontSize="35px"
                letterSpacing="1px"
              >
                導入事例
              </Box>
              <Box
                className="iaaa2"
                color="#999"
                width={["12.67px", "25.33px", "38px"]}
                height="22px"
                marginTop="12px"
                lineHeight="20px"
                fontWeight="bold"
                fontSize="14px"
              >
                case
              </Box>
              <Box
                className="iaaa3"
                width={["97.33px", "194.67px", "292px"]}
                height="23px"
                marginTop="24px"
              >
                幅広い企業にご利用いただいております
              </Box>
            </Box>
          </Box>
          <Box
            className="iab"
            width="100%"
            height="403px"
            display="flex"
            justifyContent="space-between"
            marginTop="56px"
          >
            <Box
              className="iab-Box"
              width={["162.67px", "325.33px", "488px"]}
              height="403px"
            >
              <Box className="iab-Box-top" width="100%" height="256px">
                <Image
                  className="導入事例-img"
                  width="100%"
                  height="100%"
                  src="./images/img-15.webp"
                  alt="マザー牧場事例"
                  borderRadius="10px"
                />
              </Box>
              <Box
                className="iab-Box-bottom"
                width="100%"
                height="123px"
                marginTop="24px"
                display="flex"
                flexDirection="column"
              >
                <Box
                  className="iab-Box-bottom1"
                  color="#3da43a"
                  width="100%"
                  height="19px"
                  fontSize="14px"
                >
                  ✅ AItoChatをご利用
                </Box>
                <Box
                  className="iab-Box-bottom2"
                  width="100%"
                  height="51px"
                  marginTop="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  letterSpacing="1px"
                >
                  電話問い合わせ66%削減！マザー牧場様に、MediaTalkGAI
                  <br />
                  運用6ヶ月後インタビュー実施！
                </Box>
                <Box
                  className="iab-Box-bottom3"
                  color="#999"
                  width="100%"
                  height="19px"
                  marginTop="24px"
                  lineHeight="20px"
                  fontSize="15px"
                >
                  マザー牧場 様
                </Box>
              </Box>
            </Box>
            <Box
              className="iab-Box"
              width={["162.67px", "325.33px", "488px"]}
              height="403px"
            >
              <Box className="iab-Box-top" width="100%" height="256px">
                <Image
                  className="導入事例-img"
                  width="100%"
                  height="100%"
                  src="./images/img-16.webp"
                  alt="dai事例"
                  borderRadius="10px"
                />
              </Box>
              <Box
                className="iab-Box-bottom"
                width="100%"
                height="123px"
                marginTop="24px"
                display="flex"
                flexDirection="column"
              >
                <Box
                  className="iab-Box-bottom1"
                  color="#3da43a"
                  width="100%"
                  height="19px"
                  fontSize="14px"
                >
                  ✅ AItoFAQをご利用
                </Box>
                <Box
                  className="iab-Box-bottom2"
                  width="100%"
                  height="51px"
                  marginTop="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  letterSpacing="1px"
                >
                  問い合わせ数47%削減！シナリオ型チャットボットからAI-
                  <br />
                  FAQへの移行で実現したカスタマーサポート効率化
                </Box>
                <Box
                  className="iab-Box-bottom3"
                  color="#999"
                  width="100%"
                  height="19px"
                  marginTop="24px"
                  lineHeight="20px"
                  fontSize="15px"
                >
                  dai 様
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="j"
        width="100%"
        height="317px"
        display="flex"
        justifyContent="center"
        marginTop="169px"
      >
        <Box
          className="ja"
          backgroundColor="#37a235"
          width={["350px", "700px", "1050px"]}
          height="317px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
        >
          <Box
            className="jaa"
            width={["204.67px", "409.33px", "614px"]}
            height="197px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              className="jaa-top"
              width="100%"
              height="130px"
              display="flex"
              alignItems="center"
            >
              <Box
                className="jaa-top-left"
                width={["146.67px", "293.33px", "440px"]}
                height="77px"
                display="flex"
                flexDirection="column"
              >
                <Box
                  className="jaa-top-left1"
                  color="#fff"
                  width="100%"
                  height="44px"
                  fontWeight="bold"
                  fontSize="24px"
                  lineHeight="40px"
                >
                  まずはお気軽にお問い合わせください！
                </Box>
                <Box
                  className="jaa-top-left2"
                  color="#fafafa"
                  width="100%"
                  height="33px"
                  fontWeight="bold"
                  fontSize="17px"
                  letterSpacing="1px"
                  lineHeight="32px"
                >
                  お客様に合わせて最適なプランをご提案いたします
                </Box>
              </Box>
              <Box
                className="jaa-top-right"
                width={["53.67px", "107.33px", "161px"]}
                height="130px"
                marginLeft="13px"
              >
                <img
                  width="100%"
                  height="100%"
                  src="./images/mini-4.webp"
                  alt="Contact illustration"
                />
              </Box>
            </Box>
            <Box
              className="jaa-bottom"
              width={["140px", "280px", "420px"]}
              height="47px"
              marginTop="20px"
              display="flex"
              justifyContent="space-between"
              textAlign="center"
            >
              <Box
                className="jaa-bottom-left"
                color="#fff"
                width={["67px", "134px", "201px"]}
                height="45px"
                fontSize="15px"
                fontWeight="bold"
                lineHeight="44px"
                border="solid 2px #fff"
                borderRadius="30px"
              >
                資料請求
              </Box>
              <Box
                className="jaa-bottom-right"
                backgroundColor="#fff"
                color="#37a235"
                width={["67px", "134px", "201px"]}
                height="47px"
                fontSize="15px"
                fontWeight="bold"
                lineHeight="44px"
                borderRadius="30px"
              >
                お問い合わせ
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="k"
        width="100%"
        height="370px"
        display="flex"
        justifyContent="center"
        marginTop="120px"
      >
        <Box
          className="ka"
          backgroundColor="#fff"
          width={["350px", "700px", "1050px"]}
          height="370px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          boxShadow="2px 2px 5px rgba(0, 0, 0, 0.3)"
        >
          <Box
            className="kaa"
            width={["177.33px", "354.67px", "532px"]}
            height="249px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              className="kaa-top"
              width={["155.33px", "310.67px", "466px"]}
              height="119px"
            >
              <img
                width="100%"
                height="100%"
                src="./images/img-17.svg"
                alt="Blog illustration"
              />
            </Box>
            <Box
              className="kaa-bottom"
              width={["177.33px", "354.67px", "532px"]}
              height="110px"
              marginTop="20px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                className="kaa-bottom1"
                color="#3b3b3b"
                width="100%"
                height="43px"
                fontWeight="bold"
                fontSize="23px"
                textAlign="center"
                lineHeight="42px"
                letterSpacing="1px"
              >
                生成AI、カスタマーサポートに関する記事公開中
              </Box>
              <Box
                className="kaa-bottom2"
                backgroundColor="#3b3b3b"
                color="#fff"
                width={["65px", "130px", "195px"]}
                height="45px"
                marginTop="22px"
                borderRadius="30px"
                fontSize="14px"
                fontWeight="bold"
                textAlign="center"
                lineHeight="42px"
              >
                ブログを読む
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="l"
        backgroundColor="#f9f9f9"
        width="100%"
        height="673px"
        marginTop="80px"
        display="flex"
        alignItems="center"
      >
        <Box
          className="la"
          width={["309.33px", "618.67px", "928px"]}
          height="456px"
          marginLeft="135px"
          display="flex"
          marginBottom="18px"
        >
          <Box
            className="la-left"
            width={["74px", "148px", "222px"]}
            height="456px"
            display="flex"
            flexDirection="column"
          >
            <Box
              className="la-left1"
              width="100%"
              height="51px"
              fontWeight="bold"
              fontSize="34px"
              letterSpacing="2px"
            >
              よくある質問
            </Box>
            <Box
              className="la-left2"
              color="#999"
              width={["11.67px", "23.33px", "35px"]}
              height="22px"
              marginTop="12px"
              fontWeight="bold"
              fontSize="15px"
            >
              FAQ
            </Box>
          </Box>
          <Box
            className="la-right"
            width={["195px", "390px", "585px"]}
            height="456px"
            marginLeft="121px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Box
              className="la-right-Box"
              width={["195px", "390px", "585px"]}
              height="430px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {[
                "「AIto」はどのようなチャネルに対応しているのでしょうか？",
                "料金プランを教えてください",
                "初期導入サポートの詳細を教えてください",
                "「AIto」の応答の精度はどの程度なのでしょうか？",
                "「AIto」は既存のカスタマーサポートチームの仕事を奪うのでしょうか？",
                "将来的に「AIto」はどのように進化していくのでしょうか？",
              ].map((question, index) => (
                <Box
                  key={index}
                  className="la-right-Box-inside"
                  width="100%"
                  height="31px"
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    className="la-right-Box-inside左"
                    backgroundColor="#212121"
                    color="#fff"
                    width={["11.67px", "23.33px", "35px"]}
                    height="31px"
                    borderRadius="50%"
                    textAlign="center"
                    lineHeight="30px"
                  >
                    ＋
                  </Box>
                  <Box
                    className="la-right-Box-inside右"
                    width="100%"
                    height="23px"
                    marginLeft="23px"
                    fontSize="16px"
                    fontWeight="bold"
                    lineHeight="20px"
                  >
                    {question}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="m"
        width="100%"
        height="1440px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="ma" width={["330px", "660px", "990px"]} height="1407px">
          <Box
            className="maa"
            width="100%"
            height="85px"
            display="flex"
            justifyContent="center"
          >
            <Box
              className="maaa"
              width={["136.67px", "273.33px", "410px"]}
              height="85px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                className="maaa1"
                width="100%"
                height="49px"
                fontWeight="bold"
                fontSize="35px"
                letterSpacing="2px"
              >
                お問い合わせ・資料請求
              </Box>
              <Box
                className="maaa2"
                color="#999"
                width={["19.33px", "38.67px", "58px"]}
                height="23px"
                marginTop="13px"
                fontWeight="bold"
                fontSize="14px"
              >
                contact
              </Box>
            </Box>
          </Box>
          <Box
            className="mab"
            backgroundColor="#64ba93"
            width={["330px", "660px", "990px"]}
            height="87px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <Box
              className="maba"
              color="#fff"
              width={["48.67px", "97.33px", "146px"]}
              height="28px"
            >
              AIto お問い合わせ
            </Box>
          </Box>
          <Box
            className="mac"
            backgroundColor="#f5f5f5"
            width={["330px", "660px", "990px"]}
            height="1110px"
            display="flex"
            justifyContent="center"
          >
            <Box
              className="maca"
              width={["271.33px", "542.67px", "814px"]}
              height="100%"
            >
              <Box
                className="maca1"
                width={["168.33px", "336.67px", "505px"]}
                height="16px"
                fontSize="14px"
                lineHeight="17px"
                marginTop="47px"
              >
                連絡先をいただいた後、すぐに資料ダウンロード用のURLをお送りいたします。
              </Box>
              <FormControl
                // onSubmit={handleSubmit}

                display="flex"
                flexDirection="column"
                width="calc(100%-40px)"
                fontSize="15px"
                fontWeight="bold"
              >
                {/* Company Name */}
                <Box
                  className="フォーム"
                  width="100%"
                  height="67px"
                  display="flex"
                  flexDirection="column"
                  marginTop="29px"
                >
                  <label htmlFor="company">会社名*</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="メディアリンク株式会社"
                    // value={formData.company}
                    // onChange={handleInputChange}

                    width="99%"
                    height="39px"
                  />
                </Box>

                {/* Department */}
                <Box
                  className="フォーム"
                  width="100%"
                  height="67px"
                  display="flex"
                  flexDirection="column"
                  marginTop="29px"
                >
                  <label htmlFor="department">部署名*</label>
                  <input
                    id="department"
                    name="department"
                    type="text"
                    placeholder="カスタマーサポート部"
                    // value={formData.department}
                    // onChange={handleInputChange}

                    width="99%"
                    height="39px"
                  />
                </Box>

                {/* Name */}
                <Box
                  className="フォーム"
                  width="100%"
                  height="67px"
                  display="flex"
                  flexDirection="column"
                  marginTop="29px"
                >
                  <label htmlFor="name">氏名*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="田中 太郎"
                    // value={formData.name}
                    // onChange={handleInputChange}

                    width="99%"
                    height="39px"
                  />
                </Box>

                {/* Email */}
                <Box
                  className="フォーム"
                  width="100%"
                  height="67px"
                  display="flex"
                  flexDirection="column"
                  marginTop="29px"
                >
                  <label htmlFor="email">メールアドレス*</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="mediatalk@mediaLink-ml.co.jp"
                    // value={formData.email}
                    // onChange={handleInputChange}

                    width="99%"
                    height="39px"
                  />
                </Box>

                {/* Interested Service */}
                <Box
                  className="箇条書き"
                  width={["93.33px", "186.67px", "280px"]}
                  height="130px"
                  display="flex"
                  flexDirection="column"
                  fontWeight="normal"
                  marginBottom="30px"
                >
                  <Box className="見出し" fontWeight="bold">
                    最も興味のあるサービス*
                  </Box>
                  {[
                    "AItoChat（チャットボット）",
                    "AItoFAQ（FAQ検索ページ）",
                    "AItoMail（メールボット）",
                    "AItoVoice（ボイスボット）",
                    "すべて（チャット/FAQ/メール/ボイス）",
                  ].map((service) => (
                    <Box
                      key={service}
                      className="radio-form"
                      height="50px"
                      fontSize="14px"
                      lineHeight="0.5px"
                    >
                      <input
                        type="radio"
                        name="interestedService"
                        value={service}
                        // checked={formData.interestedService === service}
                        // onChange={handleInputChange}
                      />
                      {service}
                    </Box>
                  ))}
                </Box>

                {/* Inquiry Type */}
                <Box
                  className="箇条書き"
                  width={["93.33px", "186.67px", "280px"]}
                  height="130px"
                  display="flex"
                  flexDirection="column"
                  fontWeight="normal"
                  marginBottom="30px"
                >
                  <Box className="見出し" fontWeight="bold">
                    お問い合わせ種別*
                  </Box>
                  {[
                    "導入したい",
                    "無料トライアルを利用したい",
                    "詳しい説明を聞きたい",
                    "とりあえず資料がほしい",
                    "その他",
                  ].map((type) => (
                    <Box
                      key={type}
                      className="radio-form"
                      height="50px"
                      fontSize="14px"
                      lineHeight="0.5px"
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        // checked={formData.inquiryType === type}
                        // onChange={handleInputChange}
                      />
                      {type}
                    </Box>
                  ))}
                </Box>

                {/* Inquiry Content */}
                <Box
                  className="フォーム-お問い合わせ"
                  width="100%"
                  height="77px"
                  display="flex"
                  flexDirection="column"
                >
                  <label htmlFor="inquiryContent">お問い合わせ内容*</label>
                  <Textarea
                    id="inquiryContent"
                    name="inquiryContent"
                    placeholder="お問い合わせの背景や理由、ご相談内容などを入力してください。出来るだけ詳細に記載詳細に記載いただけますと、より最適な内容で返信を行うことが可能になります。"
                    // value={formData.inquiryContent}
                    // onChange={handleInputChange}

                    width="96%"
                    height="37px"
                    padding="8px"
                  />
                </Box>

                {/* Privacy Policy Agreement */}
                <Box
                  className="送信"
                  width="100%"
                  height="67px"
                  marginTop="60px"
                >
                  <Box className="text" fontSize="14px">
                    お問い合わせに際しては「
                    <Text color="#1111fa" borderBottom="solid 1px #1111fa">
                      プライバシーポリシー
                    </Text>
                    」への同意が必要です。内容をご確認の上、ご同意いただける場合は「プライバシーポリシーに同意して送信する」をクリックしてください。
                  </Box>
                  <Box
                    className="checkBox-form-送信"
                    fontSize="14px"
                    marginTop="10px"
                  >
                    <input
                      type="checkBox"
                      name="agreeToPrivacyPolicy"
                      //   checked={formData.agreeToPrivacyPolicy}
                      //   onChange={handleInputChange}
                    />
                    プライバシーポリシーに同意して送信する
                  </Box>
                </Box>

                {/* Submit Button */}
                <Box
                  className="送信ボタン"
                  width="100%"
                  height="36px"
                  marginTop="48px"
                  display="flex"
                  justifyContent="center"
                >
                  <Input
                    type="submit"
                    value="送信する"
                    borderRadius="20px"
                    padding="8px 20px"
                    border="solid 1px #999"
                    color="#999"
                  />
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Box
            className="mad"
            backgroundColor="#eee"
            width="100%"
            height="129px"
          ></Box>
        </Box>
      </Box>
      <Box
        className="n"
        width="100%"
        height="373px"
        borderTop="solid 2px #eee"
        marginTop="97px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className="na"
          width={["395.33px", "790.67px", "1186px"]}
          height="181px"
          display="flex"
        >
          <Box
            className="na-left"
            width={["166px", "332px", "498px"]}
            height="181px"
            display="flex"
          >
            <Box
              className="na-left-left"
              width={["34.33px", "68.67px", "103px"]}
              height="181px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box
                className="na-left-left1"
                width="100%"
                height="22px"
                fontWeight="bold"
              >
                サービス
              </Box>
              {[
                "「Aito」とは",
                "特徴",
                "サービス紹介",
                "導入事例",
                "よくあるご質問",
              ].map((item, index) => (
                <Box
                  key={index}
                  className={`na-left-left${index + 2}`}
                  width="100%"
                  height="22px"
                  fontSize="14px"
                >
                  {item}
                </Box>
              ))}
            </Box>
            <Box
              className="na-left-right"
              width={["63.67px", "127.33px", "191px"]}
              height="181px"
              marginLeft="204px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box
                className="na-left-right1"
                width="100%"
                height="22px"
                fontWeight="bold"
              >
                企業情報
              </Box>
              {[
                "運営会社 →",
                "情報セキュリティ基本方針 →",
                "プライバシーポリシー →",
                "",
                "",
              ].map((item, index) => (
                <Box
                  key={index}
                  className={`na-left-right${index + 2}`}
                  width="100%"
                  height="22px"
                  fontSize="14px"
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            className="na-right"
            //
            //   width="100%"
            //   height="100%"
            //   display="flex"
            //   justifyContent="flex-end"
            //   alignItems="flex-end"
            //
          >
            <Box
              className="na-right-Box"
              //
              //   width={["66.67px", "133.33px", "200px"]}
              //   height="100px"
              //   display="flex"
              //   flexDirection="column"
              //   alignItems="flex-end"
              //
            >
              <Box
                className="na-right-Box-top"
                //
                //   width={["66.67px", "133.33px", "200px"]}
                //   height="59px"
                //
              >
                <Image
                  width="100%"
                  height="100%"
                  src="./images/aito-logo.webp"
                  alt="AIto logo"
                />
              </Box>
              <Box
                className="na-right-Box-bottom"
                width={["50px", "100px", "150px"]}
                height="17px"
                marginTop="24px"
                fontSize="11px"
              >
                (C)2024 MediaLink.Co.,Ltd.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AitoLandingTemplate;
