import "./index.css"
export default function BannerMessage({children}){
    return(
        <p className="banner-message">
            {children}
        </p>
    )
}