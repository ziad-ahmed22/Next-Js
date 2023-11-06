import Link from "next/link";

export default function Nav() {
  const divStyle = {backgroundColor: 'red', margin: '20px', padding: '10px', textAlign: 'center'}
  const linkStyle = {backgroundColor:'black', padding: '5px', borderRadius: '5px', margin: '10px'}

  return (
    <div style={divStyle}>
        <Link style={linkStyle} href="/">Home</Link>
        <Link style={linkStyle} href="/client-side">Client Side</Link>
        <Link style={linkStyle} href="/client-side-hoc">Client Side With (HOC)</Link>
        <Link style={linkStyle} href="/server-side">Server Side</Link>
        <Link style={linkStyle} href="/middleware">Middleware</Link> 
    </div>
  )
}
