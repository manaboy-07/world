/** @format */

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex justify-center item-center'>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
