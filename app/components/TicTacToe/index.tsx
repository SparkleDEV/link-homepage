'use client'

import { FC, useState } from 'react'
import GameField, { FieldValue } from './GameField'

// Com is maximizing
const minimax = (board: FieldValue[], alpha: number, beta: number, maximizingPlayer: boolean): number => {
	const winner = evalWinner(board)
	if (winner !== false) {
		if (winner === 'draw') return 0
		return winner === 'com' ? 1 : -1
	}

	if (maximizingPlayer) {
		let maxEval = -100
		for (const move in getPossibleMoves(board)) {
			const afterMove = board.slice()
			afterMove[move] = 'com'

			const evaluated = minimax(afterMove, alpha, beta, false)
			maxEval = Math.max(maxEval, evaluated)
			alpha = Math.max(alpha, evaluated)
			if (beta <= alpha) {
				break
			}
		}
		return maxEval
	} else {
		let minEval = 100
		for (const move in getPossibleMoves(board)) {
			const afterMove = board.slice()
			afterMove[move] = 'player'

			const evaluated = minimax(afterMove, alpha, beta, false)
			minEval = Math.min(minEval, evaluated)
			beta = Math.min(beta, evaluated)
			if (beta <= alpha) {
				break
			}
		}
		return minEval
	}
}

const getPossibleMoves = (board: FieldValue[]): number[] => {
	const values: number[] = []
	board.forEach((field, index) => {
		if (field === 'empty') values.push(index)
	})
	return values
}

const evalWinner = (board: FieldValue[]): false | 'player' | 'com' | 'draw' => {
	// Horizontals
	if (board[0] === board[1] && board[0] === board[2] && board[0] !== 'empty') return board[0]
	if (board[3] === board[4] && board[3] === board[5] && board[3] !== 'empty') return board[3]
	if (board[6] === board[7] && board[6] === board[8] && board[6] !== 'empty') return board[6]

	// Verticals
	if (board[0] === board[3] && board[0] === board[6] && board[0] !== 'empty') return board[0]
	if (board[1] === board[4] && board[1] === board[7] && board[1] !== 'empty') return board[1]
	if (board[2] === board[5] && board[2] === board[8] && board[2] !== 'empty') return board[2]

	// Diagonals
	if (board[0] === board[4] && board[0] === board[8] && board[0] !== 'empty') return board[0]
	if (board[2] === board[4] && board[2] === board[6] && board[2] !== 'empty') return board[2]

	if (!board.includes('empty')) return 'draw'

	return false
}

const getBestMove = (board: FieldValue[]): number => {
	const moves = getPossibleMoves(board)
	for (const move in moves) {
		const moved = board.slice()
		moved[move] = 'com'
		if (minimax(moved, -100, +100, false) > 0) {
			return parseInt(move)
		}
	}
	return moves[0]
}

const TicTacToe: FC = () => {
	const [gameBoard, setGameBoard] = useState<FieldValue[]>([
		'empty',
		'empty',
		'empty',
		'empty',
		'empty',
		'empty',
		'empty',
		'empty',
		'empty'
	])
	const [waiting, setWaiting] = useState(false)

	const setField = (fieldIndex: number, value: FieldValue) => {
		const newGB = gameBoard.slice()
		newGB[fieldIndex] = value
		setGameBoard(newGB)
	}

	const handleClick = (fieldIndex: number) => {
		if (!waiting) {
			setField(fieldIndex, 'player')
			setWaiting(true)
			aiMove()
		}
	}

	const aiMove = async () => {
		const best = getBestMove(gameBoard)
		setField(best, 'com')
		setWaiting(false)
	}

	return (
		<>
			<div className="grid grid-cols-3 px-16 py-3">
				<GameField
					value={gameBoard[0]}
					onClick={(e) => {
						handleClick(0)
					}}
					extraClasses="border-b-2 border-r-2"
				/>
				<GameField
					value={gameBoard[1]}
					onClick={(e) => {
						handleClick(1)
					}}
					extraClasses="border-b-2 border-l-2 border-r-2"
				/>
				<GameField
					value={gameBoard[2]}
					onClick={(e) => {
						handleClick(2)
					}}
					extraClasses="border-b-2 border-l-2"
				/>
				<GameField
					value={gameBoard[3]}
					onClick={(e) => {
						handleClick(3)
					}}
					extraClasses="border-b-2 border-r-2 border-t-2"
				/>
				<GameField
					value={gameBoard[4]}
					onClick={(e) => {
						handleClick(4)
					}}
					extraClasses="border-2"
				/>
				<GameField
					value={gameBoard[5]}
					onClick={(e) => {
						handleClick(5)
					}}
					extraClasses="border-b-2 border-l-2 border-t-2"
				/>
				<GameField
					value={gameBoard[6]}
					onClick={(e) => {
						handleClick(6)
					}}
					extraClasses="border-r-2 border-t-2"
				/>
				<GameField
					value={gameBoard[7]}
					onClick={(e) => {
						handleClick(7)
					}}
					extraClasses="border-l-2 border-r-2 border-t-2"
				/>
				<GameField
					value={gameBoard[8]}
					onClick={(e) => {
						handleClick(8)
					}}
					extraClasses="border-l-2 border-t-2"
				/>
			</div>
		</>
	)
}

export default TicTacToe
