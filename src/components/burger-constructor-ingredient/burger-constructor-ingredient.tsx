// src/components/burger-constructor-ingredient/burger-constructor-ingredient.tsx
import React, {useRef} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import {useDispatch} from 'react-redux'
import {
    removeConstructorIngredient,
    sortConstructorIngredients
} from '../../services/actions/selectedIngredientsActions'
import Ingredient from "../../interfaces/ingredient"
import {DropTargetHookSpec, useDrag, useDrop} from "react-dnd"
import styles from './burger-constructor-ingredient.module.scss'
import GrabIcon from "./grab-icon";

interface ConstructorElementProps {
    ingredient: Ingredient
    index: number
}

const ItemTypes = {
    INGREDIENT: 'ingredient',
}

const BurgerConstructorIngredient: React.FC<ConstructorElementProps> = ({ingredient, index}) => {
    const dispatch = useDispatch()

    const handleRemoveIngredient = () => {
        dispatch(removeConstructorIngredient(index))
    }

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.INGREDIENT,
        item: () => {
            return {ingredient, index}
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const dropSpec: DropTargetHookSpec<{ ingredient: Ingredient; index: number; }, any, any> = {
        accept: ItemTypes.INGREDIENT,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item, monitor) {

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            if (!hoverBoundingRect) {
                return
            }

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            if (!clientOffset) {
                return
            }

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(sortConstructorIngredients(dragIndex, hoverIndex))
            item.index = hoverIndex
        },
    }

    const [{handlerId}, drop] = useDrop(dropSpec)

    const ref = useRef<HTMLDivElement | null>(null)
    drag(drop(ref))

    return (
        <div
            ref={ref}
            data-handler-id={handlerId}
            className={styles.ingredient}
            style={{opacity: isDragging ? 0.5 : 1}}
        >
            <GrabIcon />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
                handleClose={() => handleRemoveIngredient()}
            />
        </div>
    )
}

export default BurgerConstructorIngredient
