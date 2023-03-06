


export default function Card({ image, title, content, url, tags = {} }) {
    return(
        <a href={ url } className="max-w-sm overflow-hidden" target="_blank">
            <img className="w-full" src={ image } alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ title }</div>
              <p className="text-gray-700 text-base">
                { content }
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                { tags &&
                    tags.map((tag, index) => (
                        <span key={ index } className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{ tag }</span>
                    ))
                }
            </div>
        </a>
    )
}