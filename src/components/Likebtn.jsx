import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const LikeButton = ({ initialLikes = Math.floor((Math.random() * 100)), onClick }) => {
    const [liked, setLiked] = useState('false');
    const [likes, setLikes] = useState(initialLikes);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
        if (onClick) onClick(!liked);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                type="button"
                className={`flex px-2 py-1 text-[#000] items-center rounded-full font-medium text-gray-500  focus:outline-none ${liked ? ' ' : ''}`}
                onClick={handleLikeClick}
            >
                {liked ? (
                    <svg
                        className="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 245 245" >
                        <path fill="#e31414" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62" />
                    </svg>
                ) : (
                    <svg
                        className="h-5 w-5 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 245 245" >
                        <path fill="#8c8c8c" d="M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62" />
                    </svg>
                )}
                <span className="ml-2">{likes}</span>
            </button>
        </div>
    );
};

export default LikeButton;