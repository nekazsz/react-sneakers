import styles             from './Drawer.module.scss'
import { DrawerProps }    from './Drawer.props'
import { useEffect }      from 'react'
import { fetchCartItems } from '../../api'


const Drawer = ({ onClose, onRemove, cartItems, setCartItems }: DrawerProps): JSX.Element => {

	useEffect(() => {
		fetchCartItems()
			.then(data => setCartItems(data))
			.catch(e => console.log(e.message))
	}, [])

	return (
		<div className={ styles.overlay }>
			<div className={ styles.drawer }>
				<h2>
					Корзина
					<img
						onClick={ onClose }
						width={ 32 }
						height={ 32 }
						className={ styles.removeBtn }
						src='/img/remove_btn.svg'
						alt='close'
					/>
				</h2>
				<div className={ styles.items }>

					{ cartItems && cartItems.map(item => <div key={ item.id } className={ styles.cartItem }>
						<img width={ 70 } height={ 70 } src={ item.img } alt='sneakers'/>
						<div>
							<p>{ item.title }</p>
							<b>{ item.price } руб.</b>
						</div>
						<img
							onClick={ () => onRemove(item) }
							width={ 32 } height={ 32 }
							className={ styles.removeBtn }
							src='/img/remove_btn.svg'
							alt='close'/>
					</div>) }

				</div>
				<div className={ styles.cartTotalBlock }>
					<ul>
						<li className='d-flex'>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className='d-flex'>
							<span>Налог 5%</span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className={ `${ styles.greenButton } greenButton` }>
						Оформить заказ
						<img src='/img/arrow.svg' alt='orderArrow'/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Drawer