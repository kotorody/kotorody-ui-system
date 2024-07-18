import React from 'react';

const AitoLandingPage = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
    }}>
      <header style={{
        width: '100%',
        height: '70px',
        display: 'flex',
      }}>
        <div style={{
          width: '807px',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            width: '256px',
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}>
            <div style={{
              width: '160px',
              height: '45px',
            }}>
              <img width="100%" height="100%" src="./images/aito-logo.webp" alt="Aito logo" />
            </div>
          </div>
          <nav style={{
            width: '551px',
            height: '20px',
            display: 'flex',
            alignItems: 'end',
            marginTop: '17px',
          }}>
            <div style={{
              width: '551px',
              height: '17px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <div style={{
                width: '62px',
                height: '17px',
                fontSize: '14px',
                fontWeight: 'bold',
              }}>AItoとは</div>
              <div style={{
                width: '34px',
                height: '17px',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}>特徴</div>
              <div style={{
                width: '93px',
                height: '17px',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}>サービス紹介</div>
              <div style={{
                width: '63px',
                height: '17px',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}>導入事例</div>
              <div style={{
                width: '108px',
                height: '17px',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}>よくあるご質問</div>
              <div style={{
                width: '90px',
                height: '17px',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}>お役立ち記事</div>
            </div>
          </nav>
        </div>
        <div style={{
          width: '633px',
          height: '70px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
          <div style={{
            width: '386px',
            height: '42px',
            display: 'flex',
          }}>
            <button style={{
              width: '160px',
              height: '41px',
              color: '#37a235',
              border: 'solid 1px #37a235',
              borderRadius: '30px',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: '40px',
              fontSize: '14px',
              marginRight: '18px',
            }}>資料請求</button>
            <button style={{
              backgroundColor: '#37a235',
              color: '#fff',
              width: '160px',
              height: '42px',
              borderRadius: '30px',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: '40px',
              fontSize: '14px',
            }}>お問い合わせ</button>
          </div>
        </div>
      </header>

      <main>
        <section style={{
          width: '100%',
          height: '563px',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '92px',
        }}>
          <div style={{
            width: '1185px',
            height: '563px',
            display: 'flex',
          }}>
            <div style={{
              width: '534px',
              height: '563px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '-14px',
            }}>
              <div style={{
                width: '534px',
                height: '368px',
              }}>
                <div style={{
                  width: '100%',
                  height: '89px',
                }}>
                  <div style={{
                    width: '300px',
                    height: '89px',
                  }}>
                    <img width="100%" height="100%" src="./images/aito-logo.webp" alt="Aito logo" />
                  </div>
                </div>
                <div style={{
                  color: '#646565',
                  width: '100%',
                  height: '30px',
                  marginTop: '4px',
                  fontWeight: 'bold',
                  fontSize: '17px',
                  letterSpacing: '1px',
                  lineHeight: '28px',
                }}>
                  カスタマーサポートを自動化するAIエージェント
                </div>
                <div style={{
                  width: '100%',
                  height: '134px',
                  marginTop: '33px',
                  fontWeight: 'bold',
                  fontSize: '47px',
                  letterSpacing: '1px',
                  lineHeight: '65px',
                }}>
                  カスタマーサポートから<br />
                  カスタマーサクセスへ
                </div>
                <div style={{
                  width: '100%',
                  height: '48px',
                  marginTop: '30px',
                }}>
                  <div style={{
                    width: '410px',
                    height: '48px',
                    display: 'flex',
                  }}>
                    <button style={{
                      width: '200px',
                      height: '43px',
                      color: '#37a235',
                      border: 'solid 1px #37a235',
                      borderRadius: '30px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      lineHeight: '40px',
                      fontSize: '16px',
                      paddingTop: '4px',
                      marginRight: '10px',
                    }}>資料請求</button>
                    <button style={{
                      backgroundColor: '#37a235',
                      width: '200px',
                      height: '44px',
                      color: '#fff',
                      borderRadius: '30px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      lineHeight: '40px',
                      fontSize: '16px',
                      paddingTop: '4px',
                    }}>お問い合わせ</button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              width: '651px',
              height: '563px',
            }}>
              <img width="100%" height="100%" src="./images/img-1.webp" alt="Main visual" />
            </div>
          </div>
        </section>

        {/* 他のセクションも同様に実装 */}
        {/* ... */}

      </main>

      <footer style={{
        width: '100%',
        height: '373px',
        borderTop: 'solid 2px #eee',
        marginTop: '97px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '1186px',
          height: '181px',
          display: 'flex',
        }}>
          <div style={{
            width: '498px',
            height: '181px',
            display: 'flex',
          }}>
            <div style={{
              width: '103px',
              height: '181px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div style={{
                width: '100%',
                height: '22px',
                fontWeight: 'bold',
              }}>サービス</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>「Aito」とは</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>特徴</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>サービス紹介</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>導入事例</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>よくあるご質問</div>
            </div>
            <div style={{
              width: '191px',
              height: '181px',
              marginLeft: '204px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div style={{
                width: '100%',
                height: '22px',
                fontWeight: 'bold',
              }}>企業情報</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>運営会社 →</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>情報セキュリティ基本方針 →</div>
              <div style={{
                width: '100%',
                height: '22px',
                fontSize: '14px',
              }}>プライバシーポリシー →</div>
            </div>
          </div>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
            <div style={{
              width: '200px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}>
              <div style={{
                width: '200px',
                height: '59px',
              }}>
                <img width="100%" height="100%" src="./images/aito-logo.webp" alt="Aito logo" />
              </div>
              <div style={{
                width: '150px',
                height: '17px',
                marginTop: '24px',
                fontSize: '11px',
              }}>(C)2024 MediaLink.Co.,Ltd.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AitoLandingPage;