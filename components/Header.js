import Link from 'next/link'

const Header = (props) => (
  <div>
    {props.links.map(link => (
      <ul>
        <Link href={link.url}>
          <a>{link.title}</a>
        </Link>
      </ul>
    ))}
  </div>
)

export default Header;
