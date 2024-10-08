import Image from "next/image";
import Link from "next/link";

export default function TwoColumnWithImage({
  headline,
  subheadline,
  buttonLabel,
  buttonUrl,
  image,
  imagePosition,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="cta-section">
      <div className="container">
        <div className="row">
          {image && imagePosition === "left" && (
            <div className="col-lg-6 order-last order-lg-first">
              <div className="left-image cta-image ">
                <Image
                  src={image}
                  height={400}
                  width={600}
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          )}
          <div className="col-lg-6">
            <div className="cta-content-wrapper">
              <div className="section-title">
                <h2 className="mb-20">{headline}</h2>
                <div dangerouslySetInnerHTML={{ __html: subheadline }} />
              </div>
              {buttonUrl ? (
                <Link
                  href={buttonUrl}
                  className="main-btn btn-hover border-btn mt-30"
                >
                  {buttonLabel}
                </Link>
              ) : null}
            </div>
          </div>
          {image && imagePosition === "right" && (
            <div className="col-lg-6">
              <div className="right-image cta-image text-lg-end">
                <Image
                  src={image}
                  height={400}
                  width={600}
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
