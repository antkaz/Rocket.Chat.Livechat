import { cloneElement } from 'preact';

import { createClassName, memo, MemoizedComponent } from '../helpers';
import styles from './styles.scss';
import {Button} from '../Button';

export class RichMessageGroup extends MemoizedComponent {
	testClick = (obj) => {
		console.log("Click clock")
		console.log(obj.srcElement.innerHTML)
	}

	renderItems = ({
		props, handleSubmit
	}) => {
		const items = [];

		let totalRichMessages = 5;

		for(let i=0; i<totalRichMessages; i++){
			items.push(
				<Button small outline onClick={this.testClick}>{`Option ${i}`}</Button>
			)
		}

		return items;
	}

	render = ({
		className,
		style = {},
		richMessages,
		handleSubmit = handleSubmit
	}) => (
		<div
			className={createClassName(styles, 'rich-message-group', {}, className)}
			style={style}
		>
			{console.log("From richMessageGroup "+richMessages)}
			{this.renderItems(this.props, handleSubmit).map((child) => cloneElement(child, { className: createClassName(styles, 'rich-message-group__item') }))}
		</div>
	)
}
