export function ChromeLayers() {
  return (
    <>
      <div className="bg-scan" aria-hidden="true" />
      <div className="bg-vignette" aria-hidden="true" />
      <div className="frame" aria-hidden="true" />
      <div className="frame-b" aria-hidden="true" />
      <div className="hud tl" aria-hidden="true">
        [NEXIA/CORE] NODE=03 · BUILD 4.26.0
      </div>
      <div className="hud tr" aria-hidden="true">
        LAT 35.6812 · LNG 139.7671
      </div>
      <div className="hud br" aria-hidden="true">
        △ GRID 32×18 · SYNC 00:00:01
      </div>
      <div className="hud bl" aria-hidden="true">
        SIGNAL ████████░░ 82%
      </div>
    </>
  );
}
