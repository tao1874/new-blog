import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import MaxWidthWrapper from './MaxWidthWrapper'
import UnstyledButton from './UnStyledButton'

const name = 'Tao. Cho'

export const siteTitle = 'Guo Tao Cho'

const HeaderWrapper = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Navigation = styled.nav``
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ListItem = styled.li`
  line-height: calc(1em + 0.625rem);
`

const NavItemLink = styled.a`
  padding: 10px;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
`
const NavItemLogo = styled(NavItemLink)`
  font-weight: bold;
  font-size: 1.5rem;
`

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MaxWidthWrapper>
        <HeaderWrapper>
          <h1>
            <Link href="/" passHref>
              <NavItemLogo>Tao</NavItemLogo>
            </Link>
          </h1>
          <Navigation>
            <List>
              <ListItem>
                <Link href="/articles" passHref>
                  <NavItemLink>Articles</NavItemLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/snippets" passHref>
                  <NavItemLink>Snippets</NavItemLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about" passHref>
                  <NavItemLink>About</NavItemLink>
                </Link>
              </ListItem>
            </List>
          </Navigation>
          <div>
            <UnstyledButton>Toggle</UnstyledButton>
          </div>
        </HeaderWrapper>
      </MaxWidthWrapper>

      <main>{}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}