import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FaStar } from "react-icons/fa"
import { Autoplay, FreeMode, Pagination } from "swiper"
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  return (
    <div className="text-white">
      <div className="my-12 max-w-maxContentTab lg:max-w-maxContent px-4">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4 rounded-2xl bg-richblack-800 p-5 shadow-md shadow-richblack-900 hover:shadow-lg transition-all duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt="user"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-yellow-100"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold text-richblack-5">
                      {`${review?.user?.firstName} ${review?.user?.lastName}`}
                    </h1>
                    <h2 className="text-xs font-medium text-richblack-400">
                      {review?.course?.courseName}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-normal text-richblack-25">
                  {review?.review.split(" ").length > truncateWords
                    ? `${review?.review.split(" ").slice(0, truncateWords).join(" ")}...`
                    : review?.review}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-yellow-100">{review.rating.toFixed(1)}</span>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={18}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
