'use client'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/slices/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="space-x-2 mt-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
