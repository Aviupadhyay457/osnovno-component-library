import "./index.css"
export default function Banner({layout, status,children, ...rest}){
    
    return (
        <div className="banner">
            {children}
        </div>
        
    )
}