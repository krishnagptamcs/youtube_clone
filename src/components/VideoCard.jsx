import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";

import { Link } from "react-router-dom";
import VideoLength from "../shared/VideoLength";
import { BsFillCheckCircleFill } from "react-icons/bs";

const VideoCard = ({ video }) => {
  return (
    <>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8">
          <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
            {/* thumbnail image section */}
            <img
              className="h-full w-full object-cover "
              src={video?.thumbnails?.[0]?.url}
            />

            {/* adding the time duration in black box on right corner of thumbnail */}
            {video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds} />
            )}
          </div>
          {/* all text part staring here */}

          <div className="flex text-black mt-3">
            {/* channel icon  */}
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border-2 border-black">
                <img
                  className="w-full h-full object-cover "
                  src={video?.author?.avatar?.[0]?.url}
                />
              </div>
            </div>

            {/* video titile */}

            <div className="flex flex-col ml-3 overflow-hidden ">
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>

              {/* tick mark  */}
              <span className="text-[12px] font-semibold mt-2 text-gray-600/[0.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill
                    size={"12px"}
                    className="text-gray-500/[0.5] ml-1"
                  />
                )}
              </span>

              {/* views count */}
              <div className="flex text-[12px] font-semibold text-gray-600/[0.7] truncate overflow-hidden">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold text-gray-900/[0.7] relative top-[-10px] mx-1">
                  .
                </span>
                {/* time duration  */}
                <span className="truncate">{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
