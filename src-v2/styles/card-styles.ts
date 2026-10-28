import { css } from "lit";
import { flowStyles } from "./flow-styles";
import { solarArcStyles } from "./solar-arc-styles";
import { labelStyles } from "./label-styles";
export const cardStyles = css`
:host {
    display: block;
    width: 100%;
    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
    --info-card-bg: rgba(249, 252, 255, 0.93);
    --info-card-bg-soft: rgba(241, 247, 252, 0.88);
    --info-card-border: rgba(255, 255, 255, 0.88);
    --info-card-text: #173652;
    --info-card-muted: #526d87;
    --info-card-shadow: 0 12px 30px rgba(8, 24, 42, 0.22);
}
.card {
    position: relative;
    width: 100%;
    aspect-ratio: 1920 / 1080;
    min-height: auto;
    overflow: hidden;
    border-radius: 32px;
    background:
    linear-gradient(
        180deg,
        #14202c 0%,
        #091018 100%
    );
    box-shadow:
    0 40px 100px rgba(0,0,0,0.50);
    backdrop-filter: blur(20px);
}
.hero-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    filter:
    saturate(1.05)
    contrast(1.02)
    brightness(0.95);
    z-index: 0;
}
.background-glow {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at 50% 10%, rgba(255,200,50,0.08), transparent 24%),
    radial-gradient(circle at 82% 40%, rgba(80,255,180,0.05), transparent 32%),
    radial-gradient(circle at 20% 60%, rgba(80,160,255,0.06), transparent 36%),
    radial-gradient(circle at 50% 90%, rgba(120,80,255,0.04), transparent 30%);
    z-index: 1;
}
.scene-vignette {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.52));
    pointer-events: none;
    z-index: 2;
}
.scene {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    z-index: 4;
}
.scene-inner {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: top left;
}
.live-power-status {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    padding: 4px 9px;
    border-radius: 10px;
    background: rgba(9, 16, 24, 0.72);
    color: rgba(220, 230, 240, 0.78);
    font-size: 12px;
    line-height: 1.2;
    pointer-events: none;
}
.phase-load-panel {
    position: absolute;
    z-index: 18;
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    width: 410px;
    padding: 10px 12px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
    box-shadow: var(--info-card-shadow);
    backdrop-filter: blur(16px) saturate(1.18);
    color: var(--info-card-text);
    pointer-events: none;
}
.phase-load-title {
    margin-bottom: 7px;
    color: #315474;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
}
.phase-load-title::before {
    content: "ϟ";
    display: inline-block;
    margin-right: 6px;
    color: #1684b8;
    font-size: 14px;
    line-height: 0.8;
    vertical-align: -1px;
}
.phase-load-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
}
.phase-load-phase {
    min-width: 0;
    padding: 5px 8px;
    border: 1px solid rgba(72, 108, 143, 0.14);
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.58);
}
.phase-load-heading,
.phase-load-details,
.phase-load-values,
.phase-load-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}
.phase-load-heading { margin-bottom: 4px; }
.phase-load-heading strong { color: #173652; font-size: 16px; }
.phase-load-missing { color: #a35b16; font-size: 12px; }
.phase-load-direction { font-size: 12px; font-weight: 800; letter-spacing: 0.04em; white-space: nowrap; }
.phase-load-direction.import { color: #ff6b6b; }
.phase-load-direction.export { color: #57e889; }
.phase-load-direction.missing { color: #9a671c; }
.phase-load-values { font-size: 14px; font-weight: 700; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-values { white-space: nowrap; }
.phase-load-values span:last-child { color: var(--info-card-muted); }
.phase-load-bar { display: grid; grid-template-columns: repeat(16, 1fr); gap: 2px; margin-top: 4px; }
.phase-load-segment { height: 6px; border-radius: 3px; background: #d9e2eb; }
.phase-load-phase.import .phase-load-segment.active { background: #ff6b6b; }
.phase-load-phase.export .phase-load-segment.active { background: #57e889; }
.phase-load-phase.missing .phase-load-segment.active { background: #9aa8b8; }
.phase-load-footer { font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-footer span:last-child { color: var(--info-card-muted); }
.phase-load-phase.warning .phase-load-footer span:last-child { color: #b87813; }
.phase-load-phase.critical .phase-load-footer span:last-child { color: #bd3842; }
.phase-load-phase.normal .phase-load-footer span:last-child { color: #278a49; }
.card.mobile .phase-load-panel { top: auto; right: auto; bottom: 16px; left: 3%; width: 94%; padding: 7px 8px; }
.card.mobile .phase-load-title { margin-bottom: 4px; }
.card.mobile .phase-load-grid { gap: 3px; }
.card.mobile .phase-load-phase { padding: 4px 6px; }
.card.mobile .phase-load-heading { margin-bottom: 2px; }
.card.mobile .phase-load-heading strong { font-size: 14px; }
.card.mobile .phase-load-details { gap: 5px; }
.card.mobile .phase-load-values { font-size: 12px; gap: 4px; }
.card.mobile .phase-load-missing { font-size: 10px; }
.card.mobile .phase-load-direction { font-size: 10px; }
.card.mobile .phase-load-footer { font-size: 10px; }
.card.mobile .phase-load-direction { letter-spacing: 0; }
.card.desktop {
    aspect-ratio: 1920 / 1080;
}
.card.mobile {
    aspect-ratio: 430 / 790;
}
.view-toolbar { position: absolute; z-index: 24; top: 26px; right: 30px; display: flex; gap: 10px; pointer-events: auto; }
.view-choice { display: flex; gap: 3px; padding: 4px; border: 1px solid rgba(255,255,255,.78); border-radius: 14px; background: rgba(14,31,48,.74); box-shadow: 0 8px 24px rgba(0,0,0,.2); backdrop-filter: blur(14px); }
.view-choice button { border: 0; border-radius: 10px; padding: 9px 13px; color: #e8f3fa; background: transparent; font: inherit; font-size: 14px; font-weight: 600; line-height: 1.1; cursor: pointer; }
.view-choice button.selected { color: #183750; background: #f8fcff; box-shadow: 0 2px 8px rgba(0,0,0,.16); }
.consumer-summary { position: absolute; z-index: 19; left: 800px; top: 815px; width: 360px; box-sizing: border-box; display: grid; gap: 7px; padding: 20px 22px; border: 1px solid rgba(255,255,255,.86); border-radius: 20px; color: #173652; background: linear-gradient(145deg,rgba(249,252,255,.96),rgba(229,241,250,.9)); box-shadow: 0 12px 30px rgba(8,24,42,.24); backdrop-filter: blur(16px); }
.consumer-summary > span, .detail-eyebrow { color: #54738d; font-size: 12px; font-weight: 800; letter-spacing: .12em; }
.consumer-summary strong { font-size: 30px; line-height: 1.1; }
.consumer-summary small { color: #536d82; font-size: 12px; }
.consumer-summary .metric-warning { color: #946214; }
.compact-phase-panel { position: absolute; z-index: 19; left: 400px; top: 585px; width: 340px; box-sizing: border-box; padding: 13px 15px; border: 1px solid rgba(255,255,255,.86); border-radius: 18px; color: #173652; background: linear-gradient(145deg,rgba(249,252,255,.96),rgba(229,241,250,.9)); box-shadow: 0 12px 30px rgba(8,24,42,.24); backdrop-filter: blur(16px); }
.compact-phase-panel header { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; color:#315474; font-size:12px; }
.compact-phase-live { margin-right:auto; margin-left:6px; color:#71899a; font-size:9px; letter-spacing:.08em; }
.compact-phase-panel > div { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; }
.compact-phase-panel section { display:grid; gap:3px; padding:7px 6px; border-radius:9px; background:rgba(255,255,255,.62); text-align:center; }
.compact-phase-panel section b { color:#315474; font-size:12px; }
.compact-phase-panel section span { font-size:11px; font-weight:650; white-space:nowrap; }
.compact-phase-panel section small { color:#607a90; font-size:9px; }
.compact-phase-panel button, .detail-back { border:0; border-radius:10px; padding:9px 12px; color:#fff; background:#214b6c; font:inherit; font-size:13px; font-weight:600; cursor:pointer; }
.compact-phase-panel button { width:100%; margin-top:9px; }
.phase-network-detail { position:absolute; z-index:22; inset:70px 38px 30px; overflow:auto; box-sizing:border-box; padding:30px 36px; border:1px solid rgba(255,255,255,.76); border-radius:25px; color:#edf7ff; background:linear-gradient(145deg,rgba(10,25,40,.94),rgba(18,44,65,.91)); box-shadow:0 22px 60px rgba(0,0,0,.38); backdrop-filter:blur(18px); pointer-events:auto; }
.detail-header { display:flex; justify-content:space-between; align-items:center; gap:20px; }
.detail-header h2 { margin:5px 0; font-size:26px; }
.detail-grid-card { display:grid; gap:12px; max-width:1100px; margin:24px auto 28px; padding:30px 36px; border:1px solid rgba(255,255,255,.2); border-radius:20px; background:rgba(255,255,255,.09); text-align:center; }
.detail-card-title, .detail-phase-card header { display:flex; justify-content:space-between; align-items:center; gap:12px; }
.detail-grid-card > strong { font-size:54px; line-height:1.1; }
.detail-grid-card > small, .detail-phase-values small { color:#a8c2d5; }
.detail-grid-status, .detail-phase-direction { font-size:13px; color:#c8dfed; }
.detail-grid-card.import { border-color:rgba(255,129,111,.65); }
.detail-grid-card.export { border-color:rgba(86,220,150,.65); }
.detail-grid-card.balance { border-color:rgba(115,196,235,.45); }
.detail-grid-status b { display:inline-grid; width:25px; height:25px; place-items:center; border-radius:50%; color:#fff; background:rgba(255,255,255,.15); font-size:18px; }
.detail-grid-card.import .detail-grid-status b { background:#a8473a; }
.detail-grid-card.export .detail-grid-status b { background:#267649; }
.detail-phase-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
.detail-phase-card { min-width:0; padding:26px; border:1px solid rgba(255,255,255,.17); border-radius:17px; background:rgba(255,255,255,.075); }
.detail-phase-values { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:20px; }
.detail-phase-values > div { display:grid; gap:7px; }
.detail-phase-values strong { font-size:30px; }
.detail-phase-direction.import { color:#ff9b8b; }
.detail-phase-direction.export { color:#8ceab2; }
.detail-phase-direction.missing { color:#b6c2ca; }
.detail-phase-meter-label { display:flex; justify-content:space-between; gap:10px; margin-top:18px; color:#c7d9e5; font-size:12px; }
.detail-phase-meter-label strong { color:#f4f9fc; font-variant-numeric:tabular-nums; }
.detail-phase-meter { height:16px; margin-top:7px; overflow:hidden; border:1px solid rgba(255,255,255,.18); border-radius:99px; background:rgba(0,0,0,.24); }
.detail-phase-meter > span { display:block; height:100%; border-radius:inherit; background:#78dba0; transition:width .25s ease; }
.detail-phase-meter.import > span { background:linear-gradient(90deg,#f0bd65,#fa796e); }
.detail-phase-meter.export > span { background:linear-gradient(90deg,#45bb7d,#83e6ae); }
.detail-phase-meter.warning > span { background:#f0bd65; }
.detail-phase-meter.critical > span { background:#fa796e; }
.detail-phase-meter.missing { background:repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 5px,transparent 5px 10px),rgba(0,0,0,.22); }
.detail-meter-caption { display:block; margin-top:6px; color:#99b2c4; font-size:12px; }
.card.mobile .view-toolbar { top:12px; right:10px; left:10px; justify-content:center; gap:4px; }
.card.mobile .view-choice { padding:2px; }
.card.mobile .view-choice button { padding:6px 7px; font-size:10px; }
.card.mobile .consumer-summary { left:14px; top:470px; width:calc(100% - 28px); gap:5px; padding:10px 12px; }
.card.mobile .consumer-summary strong { font-size:28px; }
.card.mobile .compact-phase-panel { left:14px; top:590px; width:calc(100% - 28px); padding:7px 8px; }
.card.mobile .compact-phase-panel header { margin-bottom:5px; }
.card.mobile .compact-phase-panel section { gap:2px; padding:5px 4px; }
.card.mobile .compact-phase-panel button { margin-top:6px; padding:7px 10px; }
.card.mobile .phase-network-detail { top:36px; right:6px; bottom:8px; left:6px; max-height:calc(100% - 44px); overflow-x:hidden; overflow-y:auto; overscroll-behavior:contain; padding:6px; }
.card.mobile .detail-header { position:sticky; top:-6px; z-index:2; padding:3px 0; background:linear-gradient(145deg,rgba(10,25,40,.98),rgba(18,44,65,.98)); }
.card.mobile .detail-header { gap:8px; }
.card.mobile .detail-header h2 { font-size:20px; }
.card.mobile .detail-grid-card { gap:5px; margin:8px auto 8px; padding:9px 10px; }
.card.mobile .detail-grid-card > strong { font-size:28px; }
.card.mobile .detail-phase-grid { grid-template-columns:minmax(0,1fr); gap:5px; }
.card.mobile .detail-phase-card { padding:8px 10px; }
.card.mobile .detail-phase-values { gap:8px; margin-top:8px; }
.card.mobile .detail-phase-values strong { font-size:24px; }
.card.mobile .detail-phase-meter-label { margin-top:8px; }
${flowStyles}
${solarArcStyles}
${labelStyles}
`;
