import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentFooter.module.scss";
import Image from "next/image";

export default function ComponentFooter({ contentModule }) {
  const { title, logo, copy, whatsapp } = contentModule;
  return (
    <section className={classes.oFooter}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oLogo} col-12 col-md-4`}>
            <figure className={`${classes.mImage}`}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={logo?.fields?.file?.url}
                alt={`title`}
                width={logo?.fields.file.details.image.width}
                height={logo?.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </figure>
            <p className={`${classes.aTitle} fnt20`}>{title}</p>
          </div>
          <div className={`${classes.oBody} col-12 col-md-4`}>
            <div className={classes.mText}>
              {documentToReactComponents(copy)}
            </div>
          </div>
          <div className={`${classes.oWhatsapp} col-12 col-md-4`}>
            <figure className={`${classes.mImage}`}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={whatsapp?.fields?.file?.url}
                alt={`title`}
                width={whatsapp?.fields.file.details.image.width}
                height={whatsapp?.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
