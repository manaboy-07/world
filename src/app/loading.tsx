/** @format */

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex items-center justify-center'>
      <div>
        <span className='loader'></span>
        <span>Fetching world data</span>
      </div>
    </div>
  );
}
