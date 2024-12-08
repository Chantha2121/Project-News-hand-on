export default function NewsCard({ title, description, imageUrl, link }) {
  return (
    <div className="relative bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="w-full h-[150px] sm:h-[180px] rounded-lg overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={title || "News Image"}
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 leading-snug tracking-tight">
          {title || "Untitled"}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description || "No description available."}
        </p>

        {/* Read More Link */}
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 font-medium mt-3 hover:text-blue-600 transition-colors"
          >
            Read More →
          </a>
        ) : (
          <span className="inline-block text-gray-400 font-medium mt-3">
            No Link Available
          </span>
        )}
      </div>
    </div>
  );
}
