
  
  export function LoadMoreButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-2 border text-[#6941C6] text-base font-medium cursor-pointer bg-[#F9F5FF] px-5 py-3 rounded-lg border-solid border-[#F9F5FF] hover:bg-[#F4EBFF] transition-colors"
        aria-label="Load more posts"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99984 4.16663V15.8333M9.99984 15.8333L15.8332 9.99996M9.99984 15.8333L4.1665 9.99996"
            stroke="#6941C6"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Load more</span>
      </button>
    );
  }