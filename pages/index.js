import Features from "@/components/landing-page-sections/features";
import Hero from "@/components/landing-page-sections/hero";
import Testimonials from "@/components/landing-page-sections/testimonials";
import TwoColumnWithImage from "@/components/landing-page-sections/two-column-with-image";
import guidedDownload from "./../public/images/guidedDownload.png";
import tradingView from "./../public/images/chart.svg";
import AssetProtect from "./../public/images/AssetProtect.svg";
import privacy from "./../public/images/privacy.svg";
import dataProtect from "./../public/images/dataProtect.svg";
import monitor from "./../public/images/monitor.svg";
import Blog from "@/components/blog/blog";
import TitleListItem from "@/components/landing-page-sections/title-list-item";
import SlideCarousel from "@/components/landing-page-sections/slide-carousel";
import FourItem from "@/components/landing-page-sections/four-item";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import TableCoin from "@/components/landing-page-sections/table-coin";
export default function Index({ posts, coins }) {
  return (
    <>
      <Hero
        headline={"Sàn giao dịch Forex nhanh hơn, tốt hơn, mạnh mẽ hơn"}
        subheadline={
          "Bạn còn mới với thị trường tiền mã hóa? Không sao. Hãy thử mua chỉ với $50 qua một thao tác nhấn, đồng thời nâng tầm kỹ năng"
        }
        buttonLabel="Update this Page "
        image={guidedDownload}
        scrollAnchorId={"home"}
      />

      <TwoColumnWithImage
        headline={"Chào mừng bạn đến với Exness"}
        subheadline={`Exness là ứng dụng đầu tư và tích lũy trực tuyến dành cho mọi người. Với Exness, mọi người đều có thể trở thành nhà đầu tư thông minh dễ dàng!
              <br/>‍
              Với sản phẩm đầu tư đa dạng, Exness có thể giúp bạn sinh lời tốt hơn gửi ngân hàng và an toàn hơn lướt sóng cổ phiếu, chơi crypto.
              <br/>‍
              Không còn sự phức tạp, không yêu cầu số vốn lớn, hạn chế rủi ro thấp nhất, giúp mọi người bắt đầu hành trình đầu tư một cách dễ dàng.`}
        buttonLabel="Update this Page "
        scrollAnchorId={"about"}
        imagePosition={"left"}
        image={tradingView}
        // buttonUrl={"/"}
      />
      <FourItem
        headline={"Sơ lược"}
        lists={[
          { title: "20 Triệu+", desc: "Người Dùng Toàn Cầu" },
          { title: "$10 Tỷ+", desc: "KLGD Trung Bình Hàng Ngày (USD)" },
          { title: "24/7", desc: "Hỗ Trợ Khách Hàng" },
          { title: "160+", desc: "Quốc Gia/Vùng Lãnh Thổ" },
        ]}
      />
      <SlideCarousel
        headline={"Các quỹ đầu tư góp vốn"}
        subheadline={"Exness được nhiều quỹ lớn trên thế giới góp vốn"}
        lists={[
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51783eb7a163c2944a5_Sequoia.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a5175da2560a4b4df41d_YC.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515a915ba1803df4cde_Saison.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51781bd89601b9df700_Venturra.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483eb7af52e294495_1982.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2126c2a47471769cd9b_appworks.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2129c31f319abc6f33e_dgventures.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a514c1a8a0cec6f68e2c_500.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483dff5566f6dcddf_FEBE.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515d1795e69367fe0d8_Nextrans.png",
          },
        ]}
      />

      <Testimonials
        headline={"Những doanh nhân uy tín đồng hành cùng "}
        testimonial={[
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_new_Pro_Team_Nicolas_d6be379a13.png",
            // name: "Johan Nyvenne",
            // title: "Cựu hCEO & thành viên HĐQT CTCP Chứng Khoán TP. HCM (HSC)",
            quote:
              "Một nhà giao dịch trong ngày và trung hạn với 4 năm kinh nghiệm giao dịch chuyên nghiệp. Nicolas có tư duy phân tích, khả năng kiểm soát cảm xúc và kiến thức sâu rộng về thị trường. Nicolas đam mê chia sẻ những hiểu biết sâu sắc và các mẹo hướng dẫn, nhờ kiến thức chuyên môn sâu rộng về cổ phiếu và tiền kỹ thuật số của anh ấy.",
          },
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_Dennis_new_fa10537f3b.png",
            // name: "DENNIS",
            // title: "CEO IBP",
            quote:
              "Một nhà giao dịch đa năng. Là một nhà báo đã có 20 năm kinh nghiệm, việc quan sát cách các sự kiện toàn cầu tác động đến thị trường càng trở nên hấp dẫn đối với anh kể từ khi anh bắt đầu giao dịch 8 năm trước. Dennis là người thay đổi cục diện và là người dẫn đầu trong 3 khía cạnh quan trọng: cố vấn, giáo dục và tính chính trực.",
          },
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_new_Pro_Team_Momen_130eb9eeb4.png",
            // name: "MOMEN",
            // title: "Phó Tổng giám đốc Công ty Quản lý quỹ Dragon Capital",
            quote:
              "Một nhà giao dịch trong ngày và lướt sóng thành công và phát triển mạnh trong thế giới Ngoại hối. Anh là một nhà giáo dục và cố vấn có uy tín với hơn 6 năm kinh nghiệm, Momen mong muốn giúp các nhà giao dịch có được kiến thức và kỹ năng cần thiết để thành công.",
          },
          {
            image:
              "https://d33vw3iu5hs0zi.cloudfront.net/media/xl_new_Pro_Team_Mohsin_50532ff8c8.png",
            // name: "MOHSIN",
            // title: "CEO Công ty CP Quản lý quỹ Bản Việt (VCAM)",
            quote:
              "Một nhà giao dịch ngoại hối và hàng hóa đã có ảnh hưởng đáng kể đến ngành giao dịch thông qua sự nhạy bén trong giảng dạy và kinh doanh của mình. Anh nổi tiếng vì đã truyền cảm hứng và tạo điều kiện cho những người đam mê giao dịch thông qua giáo dục và hướng dẫn, được công nhận trên toàn cầu.",
          },
        ]}
        scrollAnchorId={"download"}
      />
      <Features
        headline={"Cam Kết Tuân Thủ & Bảo Vệ Tài Sản Người Dùng"}
        subheadline={
          "Butter has three core content solutions: Pages, Posts, and Collections. Combine this with advanced capabilities like localization, Write API, multi-site + multi-env and Butter is your centralized content backend no matter how much content you're managing"
        }
        features={[
          {
            headline: "Bảo Vệ Tài Sản Ba Lớp",
            icon: AssetProtect,
            description:
              "Tài sản của người dùng được lưu trữ ngoại tuyến an toàn trong ví lạnh. Trải nghiệm Triple Fund Protection với kho lưu trữ ví lạnh, đảm bảo an ninh cho tài sản của người dùng thông qua bảo vệ toàn diện, mang đến trải nghiệm an toàn và đáng tin cậy.",
          },
          {
            headline: "Bảo Vệ Quyền Riêng Tư",
            icon: privacy,
            description:
              "Bybit tích hợp phương thức ưu tiên quyền riêng tư trong tất cả các sản phẩm và dịch vụ. Bybit minh bạch về dữ liệu thu thập từ bạn, nêu rõ cách sử dụng và chia sẻ dữ liệu đó.",
          },
          {
            headline: "Bảo Vệ Dữ Liệu Nâng Cao",
            icon: dataProtect,
            description:
              "Dữ liệu được mã hóa trong quá trình lưu trữ và trong khi truyền. Kiểm soát ủy quyền nghiêm ngặt để đảm bảo rằng chỉ bạn mới có thể truy cập thông tin cá nhân và riêng tư.",
          },
          {
            headline: "Giám Sát Thời Gian Thực",
            icon: monitor,
            description:
              "Các biện pháp kiểm soát rủi ro của Bybit chủ động theo dõi và phân tích hành vi của người dùng theo thời gian thực. Khi phát hiện hoạt động đáng ngờ, việc rút tiền sẽ trải qua các biện pháp xác thực nâng cao để tăng cường bảo mật.",
          },
        ]}
        scrollAnchorId={"features"}
      />
      <TableCoin
        headline={"Chênh lệch và phí qua đêm đối với thị trường ngoại hối"}
        lists={coins}
      />
      {/* <TitleListItem
        headline={"Các quỹ đầu tư góp vốn"}
        subheadline={"Binance được nhiều quỹ lớn trên thế giới góp vốn"}
        lists={[
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51783eb7a163c2944a5_Sequoia.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a5175da2560a4b4df41d_YC.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515a915ba1803df4cde_Saison.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51781bd89601b9df700_Venturra.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483eb7af52e294495_1982.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2126c2a47471769cd9b_appworks.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6201c2129c31f319abc6f33e_dgventures.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a514c1a8a0cec6f68e2c_500.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a51483dff5566f6dcddf_FEBE.png",
          },
          {
            image:
              "https://assets-global.website-files.com/617a6615e122ca12cc064abb/6184a515d1795e69367fe0d8_Nextrans.png",
          },
        ]}
        scrollAnchorId={"titlelistitem"}
      /> */}

      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  try {
    if (process.env.API_URL) {
      const res = await fetch(process.env.API_URL + "api/blog?limit=5");
      const resCoin = await fetch(
        process.env.API_URL + "api/coinList/listing?limit=30"
      );
      const { data } = await res.json();
      const { data: dataCoin } = await resCoin.json();

      return { props: { posts: data, coins: dataCoin }, revalidate: 10 };
    } else throw new Error("Error");
  } catch (e) {
    console.log("Could not get posts", e);

    return {
      props: { posts: [], coins: [] },
    };
  }
}
