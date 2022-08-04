import React, { useEffect } from "react";
import "../css/Homes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
const Homes = () => {
  // const [id, setId] = useState(null);
  // const [likes, setLikes] = useState("");
useEffect(() => window.scrollTo(0,0),[])
  const Under = [
    {
      url: "https://data-gcdn.basecdn.net/sys1/fe/2b/32/35/79/093ead9e8bdaf5d6366e733c33de8df8/ca08efea38ef643a5185408bf2aecfbb_185556_QSWYETTWZN63J.jpg",
      title: "Thông báo kỳ thi và phối hợp tổ chức đăng ký ...",
    },
    {
      url: "https://i.imgur.com/lEPnrxi.png",
      title: "Công ty CP phát triển giáo dục quốc tế IEC...",
    },
    {
      url: "https://adminvieclam.ntt.edu.vn/Uploads/images/7pL51hb.png",
      title: "Kế hoạch tổ chức chương trình tư vấn, giới thiệu...",
    },
  ];
  const Next = [
    {
      title: "THÔNG BÁO TỔ CHỨC PHIÊN GIAO DỊCH VIỆC LÀM NGÀY THỨ 2 HẰNG...",
    },
    {
      title: "THÔNG BÁO KHAI GIẢNG LỚP ĐÀO TẠO TIẾNG HÀN QUỐC THÁNG ...",
    },
    {
      title:
        "Công ty TNHH Mê Đi Ca tuyển Nhân viên bán hàng trong Siêu thị Lotte",
    },
    {
      title: "Công ty CP Nhật Ngữ Hihari tuyển dụng Trưởng phòng Đào tạo",
    },
    {
      title: "THÔNG BÁO KHAI GIẢNG LỚP ĐÀO TẠO TIẾNG HÀN QUỐC THÁNG ...",
    },
    {
      title: "Công ty CP Nhật Ngữ Hihari tuyển dụng Trưởng phòng Đào tạo",
    },
  ];
  return (
    <div className="container-home">
      <div className="header-home">
        <div className="news-home">
          <h5 className="home-header">Sàn giao dịch</h5>
          <div className="news-container">
            <div className="news-containerleft">
              <div className="news-image">
                <Carousel
                  variant="dark"
                  controls="false"
                  pause="hover"
                  interval="3000"
                  className="home-carousel"
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-40"
                      src="https://upload.tanca.io/api/image/news/611bed788836a85d45745347?name=2021-08-18-001015-quan-ly-thoi-gian.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h5 style={{ color: "red" }}>
                        Kế hoạch tổ chức chương trình tư vấn, giới thiệu việc
                        làm trong và ngoài nước tại Thị xã Hoàng Mai
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-40"
                      src="https://www.nhomkinhxingfadanang.com/wp-content/uploads/2021/08/31-1.jpg"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h5 style={{ color: "red" }}>
                        Thông báo kì thi và phối hợp tổ chức kì thi tiếng Hàn
                        theo chương trình EPS 2022
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-40"
                      src="https://cpc.vn/portals/0/articleupload/c53c9752-bfa8-4e7a-9f32-ce39c1195021.png"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h5 style={{ color: "red" }}>
                        Công ty CP phát triển nền tảng giáo dục Việt Nam
                      </h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="under-news-image">
                {Under.map((under, index) => (
                  <div className="list-home-image">
                    <img
                      alt={index}
                      src={under.url}
                      style={{ width: "230px", height: "150px" }}
                    />
                    <h6>{under.title}</h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="news-containerright">
              <Card style={{ width: "auto", padding: "4px", margin: "2px" }}>
                <Card.Img
                  variant="top"
                  src="https://anhdepfree.com/wp-content/uploads/2021/04/anh-ky-nang-lam-viec-nhom-14696.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Thư mời : Lễ khai trương Trung tâm MRC Nghệ An, Kết hợp tổ
                    chức Phiên...
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  {Next.map((next, index) => (
                    <ListGroupItem key={index}>{next.title}</ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>

        <div className="jobs-3-2-ex">
        <h5 className="home-header">Doanh nghiệp tham gia</h5>
          </div>

          </div>
        </div>

  );
};
export default Homes;
