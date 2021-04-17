// TODO: Implement.

const CombinedVolumeTracker = () => {
  return (
    <div>
      <div>
        <div>This component should keep a running tally that persists on refresh/close but can be reset</div>
        <ul>
          <li><span>small thumbnail? | </span>Soil A with a volume @ quantity of bags</li>
          <li>Soil B, volume, quantity</li>
          <li>Soil C, volume, quantity</li>
        </ul>
        <span>Provide total volume here</span>
        <div>
          <button>Add specified bags</button>
          <button>Save list</button>
        </div>
      </div>
      <p>Each entry should be removable. Ideally, this can be used to easily provide a nearly itemized listing.</p>
    </div>
  );
}

export default CombinedVolumeTracker;