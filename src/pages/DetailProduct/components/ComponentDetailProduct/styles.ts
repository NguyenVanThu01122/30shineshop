import styled from 'styled-components'

export const WrapperDetail = styled.div`
  width: 76%;
  .imgProduct {
    display: flex;
    margin-top: 10px;
    .active {
      border: 2px solid yellow;
    }
    & > div img {
      width: 60px;
      margin-right: 15px;
      border-radius: 5px;
      cursor: pointer;
    }
    .borderYellow {
      border: 1px solid yellow;
    }
  }
  .product {
    display: flex;
    .imgProduct {
      width: 40%;
      margin-right: 20px;
    }
    .imgProduct img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    .imgProduct img:hover {
      transform: scale(1.1);
    }
    .detailInformation {
      width: 60%;
      .vnd {
        font-size: 25px !important;
        color: rgba(229, 77, 62);
        font-family: 'Oswald';
        font-weight: 600;
      }
      & > div:first-child {
        font-size: 1.25rem;
        color: rgba(58, 58, 58, 0.991);
      }
      .number {
        margin: 10px 0px 30px 0px;
        display: flex;
        & > div:first-child {
          padding-right: 10px;
          color: rgba(118, 118, 118);
        }
        & > div:nth-child(2) {
          color: rgba(118, 118, 118);
        }
        & > div:last-child {
          color: rgba(118, 118, 118);
          padding: 0px 10px;
        }
        & img {
          width: 60px;
          margin-right: 10px;
        }
        & > div:nth-child(3) {
          color: rgba(118, 118, 118);
        }
      }
      & > div:nth-child(3) {
        margin: 20px 0px;
        font-size: 0.875rem;
      }
      & > div:nth-child(4) {
        color: rgba(229, 77, 62);
        font-family: Oswald;
        margin-bottom: 10px;
        font-size: 1.875rem;
        font-weight: 600;
      }
      & span {
        margin-left: 5px;
        color: rgba(229, 77, 62);
        font-family: Oswald;
        font-size: 1.875rem;
        font-weight: 600;
        text-decoration: underline;
      }
      .salePrice {
        display: flex;
        text-align: center;
        & > div:first-child {
          margin-right: 10px;
          font-size: 1.25rem;
          color: rgba(118, 118, 118);
          font-weight: 400;
          text-decoration: line-through;
          font-family: Oswald;
        }
        & > div:last-child {
          width: 20%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px 12px;
          padding-top: 7px;
          background-color: rgba(255, 204, 51);
          border-radius: 0.135rem;
          font-size: 15px;
          font-family: 'Be Vietnam Pro';
          span {
            margin-left: 10px;
            font-size: 20px;
            text-decoration: none;
          }
        }
      }
      .quantity {
        display: flex;
        align-items: center;
        margin: 25px 0px;
        & > div:first-child {
          margin-right: 80px;
          font-family: 'Oswald';
          font-weight: 600;
          color: rgba(61, 61, 61);
          font-size: 1.125rem;
        }
        .count {
          border-radius: 0.375rem;
          border: 1px solid rgba(209, 209, 209);
          display: flex;
          & > div:first-child {
            font-size: 30px;
            cursor: pointer;
            color: rgba(61, 61, 61);
            &:hover {
              color: red;
              scale: 1.3;
            }
          }
          & > div:last-child {
            cursor: pointer;
            font-size: 30px;
            color: rgba(61, 61, 61);
            &:hover {
              color: red;
              scale: 1.3;
            }
          }
          & > div:nth-child(2) {
            width: 35px;
            padding: 5px 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid rgba(209, 209, 209);
            border-right: 1px solid rgba(209, 209, 209);
          }
          & > div {
            padding: 0px 10px;
          }
        }
      }
      .selectProduct {
        display: flex;
        height: 65px;
        .addCart {
          width: 40%;
          border: 1px solid black;
          border-radius: 0.25rem;
          display: flex;
          align-items: center;
          padding-left: 20px;
          margin-right: 10px;
          text-align: center;
          cursor: pointer;
          &:hover {
            color: red;
            border-color: red;
          }
          & > div:last-child {
            font-size: 20px;
            font-weight: 600;
            font-family: 'Oswald';
          }
          & > div:first-child {
            margin-right: 10px;
          }
          .icon {
            font-size: 20px;
          }
        }
        .buyNow {
          width: 45%;
          cursor: pointer;
          text-align: center;
          padding: 3px 10px;
          border-radius: 0.25rem;
          border: 1px solid rgba(255, 204, 51);
          background-color: rgba(255, 204, 51);
          &:hover {
            color: red;
          }
          & > div:first-child {
            font-size: 1.125rem;
            font-weight: 600;
            margin-right: 10px;
            font-family: 'Oswald';
          }
          & > div:last-child {
            font-size: 12px;
            font-family: 'Be Vietnam Pro';
          }
        }
      }
    }
  }
  .informationItem {
    margin-top: 20px;
    .itemProduct {
      & > div:nth-child(2) {
        border: 1px solid rgba(209, 209, 209);
        padding: 45px 0px 45px 25px;
        font-family: 'Be Vietnam';
      }
      .instruct {
        display: flex;
        & > div:first-child {
          border-top: 1px solid rgba(209, 209, 209);
          border-left: 1px solid rgba(209, 209, 209);
          border-top-left-radius: 10px;
          padding: 10px 20px;
          font-size: 1.125rem;
          font-weight: 600;
          font-family: 'Oswald';
        }
        & > div:nth-child(2) {
          border-top: 1px solid rgba(209, 209, 209);
          border-right: 1px solid rgba(209, 209, 209);
          border-left: 1px solid rgba(209, 209, 209);
          padding: 10px 20px;
          font-size: 1.125rem;
          font-family: 'Oswald';
          font-weight: 600;
          background-color: rgba(232, 232, 232);
        }
        & > div:last-child {
          border-top: 1px solid rgba(209, 209, 209);
          border-right: 1px solid rgba(209, 209, 209);
          border-top-right-radius: 10px;
          background-color: rgba(232, 232, 232);
          padding: 10px 20px;
          font-size: 1.125rem;
          font-family: 'Oswald';
          font-weight: 600;
        }
      }
      .readMore {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0px 20px 0px;
        & > div:first-child {
          text-decoration: underline;
          font-family: 'Be Vietnam';
          font-size: 18px;
          font-style: italic;
          margin-top: 5px;
          margin-right: 15px;
        }
        .iconDown {
          font-size: 25px;
        }
      }
    }
    .CustomerFeedback {
      & > div:first-child {
        width: 20%;
        border: 1px solid rgba(209, 209, 209);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 10px 0px 10px 20px;
        font-size: 1.125rem;
        font-weight: 600;
        font-family: 'Oswald';
      }
      .feedback {
        border: 1px solid rgba(209, 209, 209);
        .animationFeedback {
          display: flex;
          justify-content: space-between;
          padding: 30px;
          text-align: center;
        }
        .noFeedback {
          width: 25%;
          & > div:first-child {
            color: rgba(255, 204, 51);
            font-size: 3.5rem;
            font-family: Oswald;
          }
          & > div:last-child {
            color: rgba(95, 95, 95);
            font-family: 'Be Vietnam';
            margin-top: 10px;
            font-weight: 700;
            font-size: 18px;
          }
          .FontAwesomeIcon {
            .iconStar {
              margin: 0px 10px;
            }
          }
        }
        .starOder {
          width: 75%;
          display: flex;
          align-items: center;
          .review {
            cursor: pointer;
            border: 1px solid rgba(255, 204, 51);
            border-radius: 5px;
            margin-left: 100px;
            width: 45%;
            padding: 12px;
            color: rgba(255, 204, 51);
          }
          .closeFeedback {
            cursor: pointer;
            border: 1px solid red;
            border-radius: 5px;
            margin-left: 100px;
            width: 45%;
            padding: 12px;
            color: red;
          }
        }
        .reviewStar {
          width: 35%;
          .star {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            & > div:first-child {
              color: rgba(95, 95, 95);
              font-size: 0.875rem;
              margin-right: 5px;
            }
            & > div:last-child {
              color: rgba(95, 95, 95);
              font-size: 0.875rem;
            }
            .iconStarYellow {
              width: 13px;
            }
            .iconCrossbar {
              width: 65%;
              font-size: 30px;
            }
            .Crossbar {
              width: 70%;
              margin: 0px 5px;
              height: 5px;
              border: 1px solid rgba(209, 209, 209);
              background-color: rgba(209, 209, 209);
            }
            #imgStar {
              margin-left: 4px;
            }
          }
        }
        .itemFeedback {
          padding: 0px 20px;
          .feedbackStar {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            & > div:first-child {
              color: gray;
              margin-right: 40px;
            }
            .selectStar {
              font-size: 28px;
              cursor: pointer;
            }
          }
          .formItemText {
            .textArea {
              padding: 20px;
            }
          }
          .itemForm {
            display: flex;
            justify-content: space-between;
          }
          .clickItem {
            margin: 10px 0px;
          }
        }
        // .itemDetailFeedback{
        //   height: 300px;
        //   overflow-y: auto ;
        .detailFeedback {
          padding: 10px;
          margin: 20px;
          border-top: 1px solid rgb(202, 201, 201);
          & > div:first-child {
            font-weight: 600;
            font-size: 20px;
          }
          .timeFeedback {
            display: flex;
            margin: 10px 0px;
            & > div:last-child {
              margin-left: 20px;
              font-size: 13px;
              color: gray;
            }
          }
          & > div:last-child {
            color: rgb(79, 79, 79);
          }
        }
        // }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .product {
      flex-direction: column;
      .imgProduct {
        width: 100%;
        border: 1px solid rgba(209, 209, 209);
        margin-bottom: 10px;
      }
      .detailInformation {
        width: 100%;
        & > div:nth-child(3) {
          margin: 0px;
        }
        .selectProduct {
          position: fixed;
          bottom: 0;
          left: 0;
          background-color: #fff;
          z-index: 100;
          width: 100%;
          .addCart {
            width: 50%;
            margin: 0px;
            color: red;
            border-color: red;
            & > div:first-child {
            }
            & > div:last-child {
              font-size: 18px;
            }
          }
          .buyNow {
            width: 50%;
            & > div:first-child {
              font-size: 22px;
              margin-bottom: 4px;
            }
            & > div:last-child {
              font-size: 8px;
            }
          }
        }
        .salePrice {
          gap: 20px;
          & > div:last-child {
            width: 40%;
          }
        }
        .quantity {
          margin: 20px 0px 0px 0px;
        }
      }
    }
    .informationItem {
      .itemProduct {
        .instruct div {
          font-size: 16px !important;
          margin: auto;
          height: 60px;
        }
      }
      .CustomerFeedback > div:first-child {
        width: 50%;
      }
      .CustomerFeedback {
        .feedback {
          .starOder {
            .reviewStar {
              margin: 0px 15px;
            }
            & > div:last-child {
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
`
