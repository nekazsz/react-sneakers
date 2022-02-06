import styles          from './Header.module.scss'
import { HeaderProps } from './Header.props'
import { Link }        from 'react-router-dom'


const Header = ({ onClickCart }: HeaderProps): JSX.Element => {
	return (
		<header className={ styles.header }>
			<Link to={ '/' }>
				<div className={ styles.headerLeft }>
					<img width={ 40 } height={ 40 } src='./img/logo.svg' alt='logo'/>
					<div>
						<h3>React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className={ styles.headerRight }>
				<li onClick={ onClickCart }>
					<img width={ 20 } height={ 20 } src='/img/cart.svg' alt='cart'/>
					<span>1205 руб.</span>
				</li>
				<li>
					<Link to={ '/favorites' }>
						<img width={ 20 } height={ 20 } src='/img/heart.svg' alt='user'/>
					</Link>
				</li>
				<li>
					<img width={ 20 } height={ 20 } src='/img/user.svg' alt='user'/>
				</li>
			</ul>
		</header>
	)
}

export default Header