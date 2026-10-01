import { motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  className?: string;
};

const RealImage3D = ({ src, alt, eyebrow, title, className = "" }: Props) => (
  <motion.figure
    initial={{ opacity: 0, y: 24, rotateX: 5 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -8, rotateX: 2, rotateY: -1.5, scale: 1.012 }}
    transition={{ duration: 0.65 }}
    className={`real-image-3d relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 shadow-2xl ${className}`}
  >
    <img src={src} alt={alt} loading="lazy" decoding="async" className="real-image-3d-media" />
    <div className="real-image-3d-shine" />
    {(eyebrow || title) && (
      <figcaption className="real-image-3d-caption">
        {eyebrow && <span>{eyebrow}</span>}
        {title && <strong>{title}</strong>}
      </figcaption>
    )}
  </motion.figure>
);

export default RealImage3D;
