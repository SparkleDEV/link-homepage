'use client'

import { FC, useEffect, useState } from 'react'
import GameField, { FieldValue } from './GameField'

// Com is maximizing
const minimax = (board: FieldValue[], maximizingPlayer: boolean): number => {
	const winner = evalWinner(board)
	if (winner !== undefined) {
		if (winner === 'draw') return 0
		return winner === 'com' ? 100 : -100
	}

	if (maximizingPlayer) {
		let bestScore = -Infinity
		for (let i = 0; i < board.length; i++) {
			if (board[i] === 'empty') {
				board[i] = 'com'
				const score = minimax(board, false)
				board[i] = 'empty'

				bestScore = Math.max(score, bestScore)
			}
		}
		return bestScore
	} else {
		let bestScore = Infinity
		for (let i = 0; i < board.length; i++) {
			if (board[i] === 'empty') {
				board[i] = 'player'
				const score = minimax(board, true)
				board[i] = 'empty'

				bestScore = Math.min(score, bestScore)
			}
		}
		return bestScore
	}
}

const evalWinner = (board: FieldValue[]): undefined | 'player' | 'com' | 'draw' => {
	// Horizontals
	if (board[0] !== 'empty' && board[0] === board[1] && board[0] === board[2]) return board[0]
	if (board[3] !== 'empty' && board[3] === board[4] && board[3] === board[5]) return board[3]
	if (board[6] !== 'empty' && board[6] === board[7] && board[6] === board[8]) return board[6]

	// Verticals
	if (board[0] !== 'empty' && board[0] === board[3] && board[0] === board[6]) return board[0]
	if (board[1] !== 'empty' && board[1] === board[4] && board[1] === board[7]) return board[1]
	if (board[2] !== 'empty' && board[2] === board[5] && board[2] === board[8]) return board[2]

	// Diagonals
	if (board[0] !== 'empty' && board[0] === board[4] && board[0] === board[8]) return board[0]
	if (board[2] !== 'empty' && board[2] === board[4] && board[2] === board[6]) return board[2]

	if (!board.includes('empty')) return 'draw'

	return undefined
}

const findBestMove = (board: FieldValue[]): number => {
	const cp = board.slice()
	let bestScore = -Infinity
	let bestMove = -1

	for (let i = 0; i < board.length; i++) {
		if (cp[i] === 'empty') {
			cp[i] = 'com'
			const score = minimax(cp, false)
			cp[i] = 'empty'

			if (score > bestScore) {
				bestMove = i
				bestScore = score
			}
		}
	}

	return bestMove
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
	const [playersTurn, setPlayersTurn] = useState(true)
	const [winner, setWinner] = useState<'player' | 'com' | 'draw' | undefined>()

	const setField = (fieldIndex: number, value: FieldValue) => {
		const newGB = gameBoard.slice()
		newGB[fieldIndex] = value
		setGameBoard(newGB)
	}

	const handleClick = (fieldIndex: number) => {
		if (playersTurn && !winner && gameBoard[fieldIndex] === 'empty') {
			setPlayersTurn(false)
			setField(fieldIndex, 'player')
		}
	}

	const aiMove = () => {
		const best = findBestMove(gameBoard)
		setField(best, 'com')
	}

	const resetGame = () => {
		setGameBoard(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'])
		setWinner(undefined)
		setPlayersTurn(true)
	}

	useEffect(() => {
		setWinner(evalWinner(gameBoard))
		if (!winner) {
			if (!playersTurn) {
				aiMove()
				setPlayersTurn(true)
			}
		}
	}, [gameBoard])

	return (
		<>
			<div className="my-2 font-bold">
				{winner === 'com' && <span className="text-red-300">I won! :D</span>}
				{winner === 'draw' && <span className="text-indigo-300">{"It's a draw!"}</span>}
				{winner === 'player' && <span className="text-green-400">You won (against an unbeatable AI, wow!)</span>}
			</div>
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
			<button
				className="mx-auto my-2 rounded-md bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-400"
				onClick={(e) => resetGame()}
			>
				Reset
			</button>
		</>
	)
}

export default TicTacToe
