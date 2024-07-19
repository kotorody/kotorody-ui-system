import React from "react";

const FureaiConciergeTemplate = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        flexGrow: "1",
      }}
    >
      <div
        className="a"
        style={{
          width: "100%",
          height: "139px",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <div
          className="aa"
          style={{
            width: "100%",
            height: "90px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="aaa"
            style={{
              width: "530px",
              height: "70px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-end",
              letterSpacing: "-1px",
            }}
          >
            <div
              className="aa-title"
              style={{
                width: "313px",
                height: "47px",
                fontSize: "28px",
                fontWeight: 900,
              }}
            >
              ふれあいコンシェルジュ
            </div>
          </div>
          <div
            className="aab"
            style={{
              width: "658px",
              height: "70px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              lineHeight: "40px",
            }}
          >
            <div
              className="aa-item"
              style={{
                color: "#0f228b",
                width: "204px",
                height: "44px",
                borderRadius: "30px",
                borderWidth: "2px",
                borderStyle: "solid",
                fontWeight: "bold",
                fontFamily: "Hiragino maru gothic Pro",
              }}
            >
              販売パートナー
            </div>
            <div
              className="aa-item"
              style={{
                color: "#0f228b",
                width: "204px",
                height: "44px",
                borderRadius: "30px",
                borderWidth: "2px",
                borderStyle: "solid",
                fontWeight: "bold",
                fontFamily: "Hiragino maru gothic Pro",
              }}
            >
              お問い合わせ
            </div>
            <div
              className="aa-item2"
              style={{
                backgroundColor: "#0f228b",
                color: "#fff",
                width: "204px",
                height: "44px",
                borderRadius: "30px",
                fontWeight: "bold",
                lineHeight: "45px",
                fontFamily: "Hiragino maru gothic Pro",
              }}
            >
              資料ダウンロード
            </div>
          </div>
        </div>
        <div
          className="ab"
          style={{
            width: "100%",
            height: "49px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            textAlign: "center",
            lineHeight: "30px",
            borderBottom: "1px solid #e2e2e2",
          }}
        >
          {[
            "選ばれる理由",
            "機能紹介",
            "料金",
            "導入事例",
            "セミナー・イベント",
            "よくあるご質問",
            "お役立ち資料",
          ].map((item, index) => (
            <div
              key={index}
              className="ab-item"
              style={{
                width: "148px",
                height: "35px",
                marginRight: "15px",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Hiragino maru gothic Pro",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div
        className="b"
        style={{
          width: "100%",
          height: "590px",
          display: "flex",
          flexDirection: "row",
          flexShrink: 0,
        }}
      >
        <div
          className="ba"
          style={{
            width: "50%",
            height: "590px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            className="baa"
            style={{
              width: "510px",
              height: "385px",
              marginTop: "30px",
              marginRight: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="baaa"
              style={{
                width: "510px",
                height: "124px",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              検索しやすさを追求した
              <br />
              AI搭載FAQシステム
            </div>
            <div
              className="baab"
              style={{
                width: "510px",
                height: "75px",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "30px",
                lineHeight: 2,
                letterSpacing: "1px",
              }}
            >
              ChatGPT活用機能で誰でも簡単にFAQ作成が可能
              <br />
              問い合わせ対応や組織の情報共有の課題を解消！
            </div>
            <div
              className="baac"
              style={{
                width: "510px",
                height: "34px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "39px",
                letterSpacing: "1px",
              }}
            >
              詳しい資料はこちら
            </div>
            <div
              className="baad"
              style={{
                width: "510px",
                height: "80px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                className="資料ダウンロード"
                style={{
                  backgroundColor: "#0f228b",
                  color: "#fff",
                  width: "350px",
                  height: "70px",
                  fontWeight: "bold",
                  fontSize: "23px",
                  textAlign: "center",
                  letterSpacing: "3px",
                  borderWidth: "2px",
                  borderRadius: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  className="ダウンロードアイコン-img"
                  src="./images/images.png"
                  alt="ダウンロードアイコン"
                />
                <div className="資料ダウンロードボタン-text">
                  資料ダウンロード
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bb"
          style={{
            width: "50%",
            height: "590px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="bba"
            style={{
              backgroundColor: "#e7f9fc",
              width: "478px",
              height: "278px",
              marginTop: "20px",
              marginLeft: "25px",
            }}
          >
            <img
              width="108%"
              height="100%"
              src="./images/original (6).avif"
              alt="AI FAQシステムイメージ"
            />
          </div>
        </div>
      </div>
      <div
        className="c"
        style={{
          backgroundColor: "#ffca3b",
          width: "100%",
          height: "850px",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <div
          className="ca"
          style={{
            width: "100%",
            height: "153px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingTop: "90px",
          }}
        >
          <div
            className="caa"
            style={{
              width: "130px",
              height: "62px",
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <div
              className="caaa"
              style={{
                color: "#05187b",
                width: "130px",
                height: "31px",
                fontSize: "19px",
                fontWeight: "bold",
                letterSpacing: "5px",
                fontFamily: "Arial",
              }}
            >
              ABOUT
            </div>
            <div
              className="caab"
              style={{
                width: "130px",
                height: "31px",
                fontSize: "17px",
              }}
            >
              <img
                className="ribbon-img"
                src="./images/icon-ribbon.png"
                alt="リボンアイコン"
              />
            </div>
          </div>
        </div>
        <div
          className="cb"
          style={{
            width: "100%",
            height: "106px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="cba"
            style={{
              width: "858px",
              height: "106px",
              fontSize: "33px",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: "4px",
            }}
          >
            社内外のあらゆる問い合わせ対応における
            <br />
            コミュニケーションの業務効率化をAIが実現します
          </div>
        </div>
        <div
          className="cc"
          style={{
            width: "100%",
            height: "106px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
            marginBottom: "10px",
          }}
        >
          <div
            className="cca"
            style={{
              width: "638px",
              height: "60px",
              textAlign: "center",
              letterSpacing: "1px",
              fontFamily: "Hiragino maru gothic Pro",
            }}
          >
            「ふれあいコンシェルジュ」は、
            <br />
            組織内のナレッジ共有と顧客対応の機能を兼ね備えたAI搭載FAQシステムです。
          </div>
        </div>
        <div
          className="cd"
          style={{
            width: "100%",
            height: "312px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="cda"
            style={{
              width: "986px",
              height: "312px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {[
              {
                img: "./images/original.avif",
                text: "正確な回答の検索を\nAIがサポート",
              },
              {
                img: "./images/original (1).avif",
                text: "社内向け・社外向けの\nサポートデスクを両立",
              },
              {
                img: "./images/original (2).avif",
                text: "FAQデータを\n簡単にカスタマイズ",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="cdaa"
                style={{
                  width: "286px",
                  height: "302px",
                  fontWeight: "bold",
                  fontSize: "25px",
                  textAlign: "center",
                  paddingTop: "10px",
                  letterSpacing: "2px",
                }}
              >
                <div className="cdaaa">
                  <img
                    width="100%"
                    height="100%"
                    src={item.img}
                    alt={`特徴 ${index + 1}`}
                  />
                </div>
                <p>
                  {item.text.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="ce"
          style={{
            width: "100%",
            height: "165px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "70px",
          }}
        >
          <div
            className="ce-box-button"
            style={{
              backgroundColor: "#fff",
              color: "#0f228b",
              width: "279px",
              height: "57px",
              textAlign: "center",
              lineHeight: "53px",
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "2px",
              border: "2px solid #0f228b",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span
              className="ce-box-button-text"
              style={{ paddingLeft: "40px" }}
            >
              機能紹介
            </span>
            <div className="ce-box-button-空白" />
            {">"}
          </div>
        </div>
      </div>
      <div
        className="d"
        style={{
          backgroundColor: "#f9fafd",
          width: "100%",
          height: "487px",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <div
          className="da"
          style={{
            width: "100%",
            height: "142px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div
            className="daa"
            style={{
              color: "#05187b",
              width: "167px",
              height: "29px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "19px",
              letterSpacing: "5px",
              fontFamily: "Arial",
            }}
          >
            SOLUTION
          </div>
          <div
            className="dab"
            style={{
              width: "167px",
              height: "29px",
              textAlign: "center",
              fontSize: "17px",
              marginBottom: "10px",
            }}
          >
            <img
              className="ribbon-img"
              src="./images/icon-ribbon.png"
              alt="リボン"
            />
          </div>
        </div>
        <div
          className="db"
          style={{
            width: "100%",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="dba"
            style={{
              width: "860px",
              height: "56px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px",
              letterSpacing: "5px",
              fontFamily: "Arial Black",
            }}
          >
            社内外の問い合わせ対応のこんな課題を解決します
          </div>
        </div>
        <div
          className="dc"
          style={{
            width: "100%",
            height: "280px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "25px",
            paddingBottom: "50px",
          }}
        >
          <div
            className="dca"
            style={{
              width: "686px",
              height: "140px",
              fontWeight: "bold",
              fontSize: "23px",
              letterSpacing: "1px",
              lineHeight: "55px",
            }}
          >
            ✅従業員や顧客からの問い合わせ対応に追われている
            <br />
            ✅ナレッジが充分に共有できずスキルが属人化している
            <br />
            ✅新しいツールは使いこなせなさそうで導入のハードルが高い
          </div>
        </div>
      </div>
      <div
        className="e"
        style={{
          backgroundColor: "#fff9eb",
          width: "100%",
          minHeight: "1537px",
          display: "flex",
          flexDirection: "column",
          paddingTop: "10px",
        }}
      >
        {[
          {
            title: "POINT①",
            heading:
              "疑問に対する回答を素早く引き出し\n従業員や顧客の自己解決を促進",
            description:
              "頻繁に寄せられる質問とその回答をあらかじめ登録しておくこ\nとで、業務ご担当者様のコミュニケーションコストの削減と業\n務効率化を叶えます。",
            image: "./images/original (3).avif",
          },
          {
            title: "POINT②",
            heading:
              "効率的なナレッジ共有で\nスキルの平準化と事業の成長をアシスト",
            description:
              "社内プロセスやルール、ベテラン担当者が培った経験や技術を\nナレッジとして登録しておくことで、社内の誰もが簡単に情報\nへアクセスできます。",
            image: "./images/original (4).avif",
          },
          {
            title: "POINT③",
            heading:
              "簡単に操作できるUI設計と\nエンジニアによる安心の導入サポート",
            description:
              "ITスキルに自信がない方でも直感的に操作できます。\n現環境からの入替作業や伴走サポートもご用意し、貴社への導\n入を安心してお任せいただけます。",
            image: "./images/original (5).avif",
          },
        ].map((point, index) => (
          <div
            key={index}
            className={`e-box${index + 1}`}
            style={{
              width: "100%",
              height: "440px",
              display: "flex",
            }}
          >
            <div
              className={`e-box${index + 1}-left`}
              style={{
                width: "50%",
                height: "440px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {index % 2 === 0 ? (
                <div
                  className="ea"
                  style={{
                    width: "500px",
                    maxWidth: "100%",
                    padding: "0 22px 30px 0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="eaa"
                    style={{
                      color: "#0f228b",
                      marginBottom: "15px",
                      fontWeight: "bold",
                      fontSize: "17px",
                      letterSpacing: "5px",
                      lineHeight: "40px",
                      fontFamily: "Arial Black",
                    }}
                  >
                    {point.title}
                  </div>
                  <div
                    className="eab"
                    style={{
                      marginBottom: "20px",
                      fontWeight: "bold",
                      fontSize: "25px",
                      letterSpacing: "4px",
                      lineHeight: "35px",
                    }}
                  >
                    {point.heading.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <div
                    className="eac"
                    style={{
                      fontSize: "16px",
                      letterSpacing: "1px",
                      lineHeight: "28px",
                      fontFamily: "Hiragino maru gothic Pro",
                    }}
                  >
                    {point.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className="ec"
                  style={{
                    width: "495px",
                    maxWidth: "100%",
                    height: "404px",
                    marginLeft: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    src={point.image}
                    alt={`Point ${index + 1}`}
                  />
                </div>
              )}
            </div>
            <div
              className={`e-box${index + 1}-right`}
              style={{
                width: "50%",
                height: "440px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: index === 1 ? "20px" : "40px",
              }}
            >
              {index % 2 === 0 ? (
                <div
                  className="eb"
                  style={{
                    width: "495px",
                    maxWidth: "100%",
                    height: "404px",
                    marginLeft: "5px",
                    marginBottom: "5px",
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    src={point.image}
                    alt={`Point ${index + 1}`}
                  />
                </div>
              ) : (
                <div
                  className="ed"
                  style={{
                    height: "254px",
                    width: "508px",
                    maxWidth: "100%",
                    padding: "0 22px 30px 0",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "65px",
                  }}
                >
                  <div
                    className="eda"
                    style={{
                      color: "#0f228b",
                      width: "508px",
                      height: "40px",
                      marginBottom: "15px",
                      fontWeight: "bold",
                      fontSize: "17px",
                      letterSpacing: "5px",
                      lineHeight: "40px",
                      fontFamily: "Arial Black",
                    }}
                  >
                    {point.title}
                  </div>
                  <div
                    className="edb"
                    style={{
                      width: "508px",
                      marginBottom: "20px",
                      fontWeight: "bold",
                      fontSize: "24px",
                      letterSpacing: "4px",
                      lineHeight: "35px",
                    }}
                  >
                    {point.heading.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <div
                    className="edc"
                    style={{
                      width: "508px",
                      height: "87px",
                      fontSize: "16px",
                      letterSpacing: "2px",
                      lineHeight: "28px",
                      fontFamily: "Hiragino maru gothic Pro",
                    }}
                  >
                    {point.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          className="e-box-4"
          style={{
            width: "100%",
            height: "158px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "45px",
            marginBottom: "90px",
          }}
        >
          <div
            className="e-box-button"
            style={{
              backgroundColor: "#fff",
              color: "#0f228b",
              width: "279px",
              height: "57px",
              textAlign: "center",
              lineHeight: "53px",
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "2px",
              border: "2px solid #0f228b",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span
              className="e-box-button-text"
              style={{
                paddingLeft: "40px",
              }}
            >
              選ばれる理由
            </span>
            <div className="e-box-button-空白" />
            {">"}
          </div>
        </div>
      </div>
      <div
        className="f"
        style={{
          backgroundColor: "#ffca3b",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "665px",
          flexShrink: 0,
        }}
      >
        <div
          className="fa"
          style={{
            width: "100%",
            height: "142px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            className="faa"
            style={{
              width: "167px",
              height: "58px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <div
              className="faaa"
              style={{
                color: "#05187b",
                width: "167px",
                height: "29px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "19px",
                letterSpacing: "6px",
                fontFamily: "Arial",
                marginBottom: "5px",
              }}
            >
              CASE
            </div>
            <div
              className="faab"
              style={{
                width: "167px",
                height: "29px",
                textAlign: "center",
                fontSize: "17px",
                marginBottom: "10px",
              }}
            >
              <img
                className="ribbon-img"
                src="./images/icon-ribbon.png"
                alt="リボン"
              />
            </div>
          </div>
        </div>
        <div
          className="fb"
          style={{
            width: "100%",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="fba"
            style={{
              width: "400px",
              height: "56px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px",
              letterSpacing: "5px",
            }}
          >
            導入事例
          </div>
        </div>
        <div
          className="fc"
          style={{
            width: "100dvw",
            height: "320px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="fca"
            style={{
              backgroundColor: "#fff",
              width: "1040px",
              height: "220px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              className="fca-左"
              style={{
                width: "360px",
                height: "220px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                className="fca-左1"
                style={{
                  width: "318px",
                  height: "219px",
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  src="./images/large.avif"
                  alt="導入事例イメージ"
                />
              </div>
            </div>
            <div
              className="fca-右"
              style={{
                minWidth: "604px",
                height: "200px",
                marginLeft: "30px",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                flexShrink: 0,
                marginBottom: "30px",
              }}
            >
              <div
                className="fca-右1"
                style={{
                  width: "310px",
                  height: "28px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  letterSpacing: "3px",
                  marginTop: "30px",
                }}
              >
                全国組織の某企業様 導入事例
              </div>
              <div
                className="fca-右2"
                style={{
                  width: "602px",
                  height: "85px",
                  fontSize: "16px",
                  letterSpacing: "2px",
                  lineHeight: "27px",
                  marginTop: "10px",
                  fontFamily: "Hiragino maru gothic Pro",
                }}
              >
                「ふれあいコンシェルジュ」を導入いただいている全国組織のある企業様
                <br />
                では、管理部門のFAQを全社的に公開することで、情報共有や問い合わせ
                <br />
                の削減に取り組まれています。「ふれあいコンシェルジュ」導入の背景や…
              </div>
              <div
                className="fca-右3"
                style={{
                  backgroundColor: "#0f228b",
                  color: "#fff",
                  width: "69px",
                  height: "25px",
                  paddingLeft: "5px",
                  fontSize: "13px",
                  textAlign: "center",
                  borderRadius: "7px",
                  fontWeight: "bold",
                  lineHeight: "22px",
                  marginTop: "14px",
                }}
              >
                ✐事例
              </div>
            </div>
          </div>
        </div>
        <div
          className="fd"
          style={{
            width: "100dvw",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            className="fd-ボタン"
            style={{
              backgroundColor: "#fff",
              color: "#0f228b",
              width: "279px",
              height: "57px",
              textAlign: "center",
              lineHeight: "58px",
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "2px",
              borderWidth: "2px",
              borderRadius: "30px",
              borderStyle: "solid",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span
              className="fd-ボタン-text"
              style={{
                marginLeft: "40px",
              }}
            >
              他の事例を見る
            </span>
            <div className="fd-ボタン-空白" />＞
          </div>
        </div>
      </div>
      <div
        className="g"
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: "749px",
          minHeight: "749px",
        }}
      >
        <div
          className="ga"
          style={{
            width: "100%",
            height: "142px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            className="gaa"
            style={{
              width: "167px",
              height: "58px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <div
              className="gaaa"
              style={{
                color: "#05187b",
                width: "167px",
                height: "29px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "19px",
                letterSpacing: "6px",
                marginBottom: "5px",
                fontFamily: "Arial",
              }}
            >
              NEWS
            </div>
            <div
              className="gaab"
              style={{
                width: "167px",
                height: "29px",
                textAlign: "center",
                fontSize: "17px",
                marginBottom: "10px",
              }}
            >
              <img className="ribbon-img" src="./images/icon-ribbon.png" />
            </div>
          </div>
        </div>
        <div
          className="gb"
          style={{
            width: "100%",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="gba"
            style={{
              width: "400px",
              height: "56px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px",
              letterSpacing: "5px",
            }}
          >
            お知らせ
          </div>
        </div>
        <div
          className="gc"
          style={{
            width: "100%",
            height: "384px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="gca"
            style={{
              width: "1028px",
              height: "304px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="gca1"
              style={{
                width: "1028px",
                height: "60px",
                display: "flex",
                borderTop: "1px solid #e2e2e2",
                borderBottom: "1px solid #e2e2e2",
              }}
            >
              <div
                className="gca1-メディア枠"
                style={{
                  width: "114px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca1-メディア"
                  style={{
                    backgroundColor: "#0f228b",
                    color: "#fff",
                    width: "93px",
                    height: "25px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ✐メディア
                </div>
              </div>
              <div
                className="gca1-日付枠"
                style={{
                  width: "106px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca1-日付"
                  style={{
                    width: "89px",
                    height: "25px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2024-05-21
                </div>
              </div>
              <div
                className="gca1-text枠"
                style={{
                  flexGrow: 1,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca1-text"
                  style={{
                    width: "100%",
                    height: "25px",
                    fontSize: "17px",
                    textAlign: "left",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "7px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  北日本コンピューターサービス株式会社の導入事例記事を公開しました
                </div>
              </div>
            </div>
            <div
              className="gca2"
              style={{
                width: "1028px",
                height: "60px",
                display: "flex",
                borderBottom: "1px solid #e2e2e2",
              }}
            >
              <div
                className="gca2-リリース枠"
                style={{
                  width: "114px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca2-リリース"
                  style={{
                    backgroundColor: "#0f228b",
                    color: "#fff",
                    width: "93px",
                    height: "25px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ✐リリース
                </div>
              </div>
              <div
                className="gca2-日付枠"
                style={{
                  width: "106px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca2-日付"
                  style={{
                    width: "89px",
                    height: "25px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2024-01-26
                </div>
              </div>
              <div
                className="gca2-text枠"
                style={{
                  flexGrow: 1,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca2-text"
                  style={{
                    width: "100%",
                    height: "25px",
                    fontSize: "17px",
                    textAlign: "left",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "7px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  ふれあいコンシェルジュの機能を強化いたします
                </div>
              </div>
            </div>

            <div
              className="gca3"
              style={{
                width: "1028px",
                height: "60px",
                display: "flex",
                borderBottom: "1px solid #e2e2e2",
              }}
            >
              <div
                className="gca3-リリース枠"
                style={{
                  width: "114px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca3-リリース"
                  style={{
                    backgroundColor: "#0f228b",
                    color: "#fff",
                    width: "93px",
                    height: "25px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ✐リリース
                </div>
              </div>
              <div
                className="gca3-日付枠"
                style={{
                  width: "106px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca3-日付"
                  style={{
                    width: "89px",
                    height: "25px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2024-01-15
                </div>
              </div>
              <div
                className="gca3-text枠"
                style={{
                  flexGrow: 1,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca3-text"
                  style={{
                    width: "100%",
                    height: "25px",
                    fontSize: "17px",
                    textAlign: "left",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "7px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  2023年 リリースまとめ
                </div>
              </div>
            </div>

            <div
              className="gca4"
              style={{
                width: "1028px",
                height: "60px",
                display: "flex",
                borderBottom: "1px solid #e2e2e2",
              }}
            >
              <div
                className="gca4-メディア枠"
                style={{
                  width: "114px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca4-メディア"
                  style={{
                    backgroundColor: "#0f228b",
                    color: "#fff",
                    width: "93px",
                    height: "25px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ✐メディア
                </div>
              </div>
              <div
                className="gca4-日付枠"
                style={{
                  width: "106px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca4-日付"
                  style={{
                    width: "89px",
                    height: "25px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2023-11-20
                </div>
              </div>
              <div
                className="gca4-text枠"
                style={{
                  flexGrow: 1,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca4-text"
                  style={{
                    width: "100%",
                    height: "25px",
                    fontSize: "17px",
                    textAlign: "left",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "7px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  宮崎市 情報政策課様の導入事例記事を公開しました
                </div>
              </div>
            </div>

            <div
              className="gca5"
              style={{
                width: "1028px",
                height: "60px",
                display: "flex",
                borderBottom: "1px solid #e2e2e2",
              }}
            >
              <div
                className="gca5-メディア枠"
                style={{
                  width: "114px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca5-メディア"
                  style={{
                    backgroundColor: "#0f228b",
                    color: "#fff",
                    width: "93px",
                    height: "25px",
                    borderRadius: "5px",
                    textAlign: "center",
                    fontSize: "13px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  ✐メディア
                </div>
              </div>
              <div
                className="gca5-日付枠"
                style={{
                  width: "106px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca5-日付"
                  style={{
                    width: "89px",
                    height: "25px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  2023-10-24
                </div>
              </div>
              <div
                className="gca5-text枠"
                style={{
                  flexGrow: 1,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  className="gca5-text"
                  style={{
                    width: "100%",
                    height: "25px",
                    fontSize: "17px",
                    textAlign: "left",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "7px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  さつま町 総務課様の導入事例記事を公開しました
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="gd"
          style={{
            width: "100dvw",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            className="gd-ボタン"
            style={{
              backgroundColor: "#fff",
              color: "#0f228b",
              width: "279px",
              height: "57px",
              textAlign: "center",
              lineHeight: "58px",
              fontWeight: "bold",
              fontSize: "18px",
              letterSpacing: "2px",
              borderWidth: "2px",
              borderRadius: "30px",
              borderStyle: "solid",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span
              className="gd-ボタン-text"
              style={{
                marginLeft: "40px",
              }}
            >
              一覧を見る
            </span>
            <div className="gd-ボタン-空白" />＞
          </div>
        </div>
      </div>

      <div
        className="h"
        style={{
          backgroundColor: "#ffca3b",
          width: "100%",
          height: "652px",
          paddingTop: "50px",
          paddingBottom: "40px",
        }}
      >
        <div
          className="ha"
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            className="haa"
            style={{
              width: "167px",
              height: "58px",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <div
              className="haaa"
              style={{
                color: "#05187b",
                width: "167px",
                height: "29px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "19px",
                letterSpacing: "6px",
                fontFamily: "Arial",
                marginBottom: "5px",
              }}
            >
              CONTACT
            </div>
            <div
              className="haab"
              style={{
                width: "167px",
                height: "29px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <img
                className="ribbon-img"
                src="./images/icon-ribbon.png"
                style={{
                  width: "50px",
                  height: "25px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="hb"
          style={{
            width: "100%",
            height: "96px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            className="hba"
            style={{
              width: "720px",
              height: "96px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "32px",
              letterSpacing: "5px",
            }}
          >
            問い合わせ対応をAIで効率化しませんか？
            <br />
            私たちにお気軽にご相談ください
          </div>
        </div>
        <div
          className="hc"
          style={{
            width: "100%",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            marginTop: "41px",
          }}
        >
          <div
            className="hca"
            style={{
              width: "303px",
              height: "120px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="hcaa"
              style={{
                width: "302px",
                height: "32px",
                fontSize: "18px",
                textAlign: "center",
                letterSpacing: "1px",
                fontFamily: "Hiragino maru gothic Pro",
              }}
            >
              お電話でのお問い合わせはこちら
            </div>
            <div
              className="hcab"
              style={{
                width: "302px",
                height: "56px",
                fontSize: "27px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textAlign: "center",
                lineHeight: "55px",
                fontFamily: "ヒラギノ角ゴ StdN",
              }}
            >
              <img
                className="kall-img"
                width="25px"
                height="25px"
                src="./images/call-icon-1023x1024-7i32yqt3.png"
                style={{
                  width: "28px",
                  height: "25px",
                  marginRight: "7px",
                }}
              />
              018-834-1811
            </div>
            <div
              className="hcac"
              style={{
                width: "302px",
                height: "32px",
                fontSize: "18px",
                letterSpacing: "2px",
                textAlign: "center",
                fontFamily: "Hiragino maru gothic Pro",
                marginTop: "20px",
              }}
            >
              平日 8:45~17:45
            </div>
          </div>
        </div>
        <div
          className="hd"
          style={{
            width: "100%",
            height: "166px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="hd-box"
            style={{
              width: "1040px",
              height: "166px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="hd-box1"
              style={{
                width: "520px",
                height: "166px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="hd-box1-1"
                style={{
                  width: "520px",
                  height: "83px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="hd-box1-1-inside"
                  style={{
                    width: "184px",
                    height: "56px",
                    fontSize: "17px",
                    textAlign: "center",
                    lineHeight: "27px",
                    letterSpacing: "1px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  ご不明な点はお気軽に
                  <br />
                  お問い合わせください
                </div>
              </div>
              <div
                className="hd-box1-2"
                style={{
                  width: "520px",
                  height: "83px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="hd-box1-2-inside"
                  style={{
                    backgroundColor: "#fff",
                    color: "#0f228b",
                    width: "350px",
                    height: "68px",
                    fontWeight: "bold",
                    fontSize: "23px",
                    textAlign: "center",
                    letterSpacing: "3px",
                    borderWidth: "2px",
                    borderRadius: "40px",
                    borderStyle: "solid",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="tegami-img"
                    src="./images/tegami.jpeg"
                    style={{
                      width: "35px",
                      height: "35px",
                      marginTop: "17px",
                    }}
                  />
                  <div
                    className="お問い合わせボタン-text"
                    style={{
                      marginTop: "17px",
                      marginLeft: "6px",
                    }}
                  >
                    お問い合わせ
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hd-box2"
              style={{
                width: "520px",
                height: "166px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="hd-box2-1"
                style={{
                  width: "520px",
                  height: "83px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="hd-box2-1-inside"
                  style={{
                    width: "184px",
                    height: "56px",
                    fontSize: "17px",
                    textAlign: "center",
                    lineHeight: "27px",
                    letterSpacing: "1px",
                    fontFamily: "Hiragino maru gothic Pro",
                  }}
                >
                  サービス紹介資料は
                  <br />
                  こちらから
                </div>
              </div>
              <div
                className="hd-box2-2"
                style={{
                  width: "520px",
                  height: "83px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="hd-box2-2-inside"
                  style={{
                    backgroundColor: "#0f228b",
                    color: "#fff",
                    width: "350px",
                    height: "70px",
                    fontWeight: "bold",
                    fontSize: "23px",
                    textAlign: "center",
                    letterSpacing: "3px",
                    borderWidth: "2px",
                    borderRadius: "40px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="ダウンロードアイコン-img"
                    src="./images/images.png"
                    style={{
                      width: "35px",
                      height: "35px",
                      marginTop: "17px",
                    }}
                  />
                  <div
                    className="資料ダウンロードボタン-text"
                    style={{
                      marginTop: "17px",
                      marginLeft: "6px",
                    }}
                  >
                    資料ダウンロード
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="i"
        style={{
          width: "100%",
          height: "506px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="ia"
          style={{
            width: "100%",
            height: "446px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="ia-inside"
            style={{
              width: "1007px",
              height: "266px",
              display: "flex",
              marginRight: "35px",
            }}
          >
            <div
              className="ia-inside1"
              style={{
                width: "313px",
                height: "266px",
                fontWeight: "bold",
                fontSize: "23px",
                letterSpacing: "-2px",
                textAlign: "center",
                lineHeight: "70px",
              }}
            >
              ふれあいコンシェルジュ
            </div>
            <div
              className="ia-inside2"
              style={{
                width: "231px",
                height: "266px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                borderLeft: "1px solid #e2e2e2",
              }}
            >
              <div
                className="ia-inside2-1"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                選ばれる理由
              </div>
              <div
                className="ia-inside2-2"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                機能紹介
              </div>
              <div
                className="ia-inside2-3"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                料金
              </div>
              <div
                className="ia-inside2-4"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                導入事例
              </div>
              <div
                className="ia-inside2-5"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                販売パートナー
              </div>
              <div
                className="ia-inside2-6"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                自治体様向けページ
              </div>
              <div
                className="ia-inside2-7"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                CRMシステム
              </div>
            </div>
            <div
              className="ia-inside3"
              style={{
                width: "231px",
                height: "266px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                borderLeft: "1px solid #e2e2e2",
              }}
            >
              <div
                className="ia-inside3-1"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                セミナー・イベント
              </div>
              <div
                className="ia-inside3-2"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                よくあるご質問
              </div>
              <div
                className="ia-inside3-3"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                お役立ち資料
              </div>
              <div
                className="ia-inside3-4"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                ブログ
              </div>
              <div
                className="ia-inside3-5"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                お知らせ
              </div>
              <div
                className="ia-inside3-6"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              ></div>
              <div
                className="ia-inside3-7"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              ></div>
            </div>
            <div
              className="ia-inside4"
              style={{
                width: "231px",
                height: "266px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                borderLeft: "1px solid #e2e2e2",
              }}
            >
              <div
                className="ia-inside4-1"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                お問い合わせ
              </div>
              <div
                className="ia-inside4-2"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                無料デモ・相談
              </div>
              <div
                className="ia-inside4-3"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                メルマガ申し込み
              </div>
              <div
                className="ia-inside4-4"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                会社概要
              </div>
              <div
                className="ia-inside4-5"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              >
                プライバシーポリシー
              </div>
              <div
                className="ia-inside4-6"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              ></div>
              <div
                className="ia-inside4-7"
                style={{
                  width: "200px",
                  height: "33px",
                  fontWeight: "bold",
                  lineHeight: "32px",
                  marginLeft: "15px",
                  letterSpacing: "1px",
                  fontSize: "17px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="ib"
          style={{
            backgroundColor: "#000",
            width: "100%",
            height: "60px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="iba"
            style={{
              color: "#fff",
              width: "380px",
              height: "15px",
              fontSize: "11px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            © 2024 KITANIHON COMPUTER SERVICE CO.,LTD.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FureaiConciergeTemplate;
