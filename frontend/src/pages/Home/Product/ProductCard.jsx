import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const product = {
  id: 1,
  name: "Nike Air Zoom Running Sneakers For Men",
  description:
    "Lightweight breathable running shoes with cushioned sole and strong grip for daily training and casual wear",
  variants: [
    {
      sellingPrice: 2499,
      mrpPrice: 4999,
      discount: 50,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80&auto=format&fit=crop",
      ],
    },
  ],
};

const ProductCard = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const variant = product.variants[0];
  const images = variant.images;

  useEffect(() => {
    if (!isHovered || images.length < 2) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  useEffect(() => {
    if (!isHovered) setCurrentImage(0);
  }, [isHovered]);

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const arrowSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.85)",
    "&:hover": { backgroundColor: "#fff" },
    width: { xs: 24, lg: 30 },
    height: { xs: 24, lg: 30 },
    zIndex: 2,
  };

  return (
    <div
      onClick={() => navigate(`/product-details/${product.id}`)}
      className="group mt-2 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
    >
      <div
        className="card relative lg:h-75 h-50 overflow-hidden rounded-xl bg-[#f8f8f8]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name}-${index + 1}`}
              className="h-full w-full min-w-full object-cover"
            />
          ))}
        </div>

        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: "12px",
            left: "12px",
            zIndex: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
          }}
        >
          <FavoriteBorderIcon
            sx={{ color: grey[900], fontSize: { xs: 16, lg: 18 } }}
          />
        </IconButton>

        {images.length > 1 && (
          <>
            <IconButton
              size="small"
              onClick={goPrev}
              sx={{ ...arrowSx, left: 8 }}
              className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeftIcon sx={{ fontSize: { xs: 16, lg: 20 } }} />
            </IconButton>

            <IconButton
              size="small"
              onClick={goNext}
              sx={{ ...arrowSx, right: 8 }}
              className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
            >
              <ChevronRightIcon sx={{ fontSize: { xs: 16, lg: 20 } }} />
            </IconButton>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to image ${index + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-4 bg-black"
                      : "w-1.5 bg-black/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="px-2">
        <div className="lg:pt-3 pt-2 space-y-1 px-2">
          <h1 className="text-[13px] lg:text-[18px] font-medium line-clamp-1">
            {product.name.split(" ").slice(0, 4).join(" ")}
            {product.name.split(" ").length > 4 && " ..."}
          </h1>

          <p className="lg:text-[15px] text-[12px] text-gray-600 line-clamp-2">
            {product.description.split(" ").slice(0, 9).join(" ")}
            {product.description.split(" ").length > 9 && " ..."}
          </p>

          <div className="flex items-center gap-2 lg:text-[16px] text-[13px]">
            <span className="font-semibold text-gray-800">
              ₹ {variant.sellingPrice}
            </span>

            <span className="line-through text-gray-400">
              ₹ {variant.mrpPrice}
            </span>

            <span className="font-semibold text-gray-600">
              {Math.round(variant.discount)}% off
            </span>
          </div>
        </div>

        <div className="mt-4 flex lg:gap-3 gap-1 mb-2">
          <button
            onClick={(e) => e.stopPropagation()}
            className="block w-full cursor-pointer py-1.5 rounded-full border text-[11px] lg:text-[14px]"
          >
            Add to Cart
          </button>

          <button
            onClick={(e) => e.stopPropagation()}
            className="block w-full bg-black cursor-pointer text-white py-1.5 rounded-full border text-[11px] lg:text-[14px]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
