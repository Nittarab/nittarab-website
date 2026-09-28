"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CELL = 1.15;
const GAP = 0.18;
const STEP = CELL + GAP;
const YEAR_GAP = 4.5;
const BASE_HEIGHT = 0.45;
const MAX_TOWER_HEIGHT = 18;
const WEEKS = 53;
const DAYS = 7;
const BLOCK_WIDTH = WEEKS * STEP;
const BLOCK_DEPTH = DAYS * STEP;
const COLORS = ["#0e4429", "#006d32", "#26a641", "#39d353", "#aff5b4"];

function dayCoordinates(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const start = new Date(Date.UTC(year, 0, 1));
  const dayOfYear = Math.floor((date - start) / 86400000);
  return {
    week: Math.floor((dayOfYear + start.getUTCDay()) / 7),
    weekday: date.getUTCDay(),
  };
}

function towerHeight(count, maximum) {
  if (count <= 0) return 0;
  return Math.max(0.35, Math.sqrt(count / Math.max(maximum, 1)) * MAX_TOWER_HEIGHT);
}

function towerColor(count, maximum) {
  const ratio = count / Math.max(maximum, 1);
  if (ratio < 0.15) return COLORS[0];
  if (ratio < 0.35) return COLORS[1];
  if (ratio < 0.6) return COLORS[2];
  if (ratio < 0.85) return COLORS[3];
  return COLORS[4];
}

function TowerInstances({ towers }) {
  const meshRef = useRef(null);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();

    towers.forEach((tower, index) => {
      dummy.position.set(tower.x, BASE_HEIGHT + tower.height / 2, tower.z);
      dummy.scale.set(1, tower.height, 1);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(index, dummy.matrix);
      meshRef.current.setColorAt(index, color.set(tower.color));
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [towers]);

  if (!towers.length) return null;

  return (
    <instancedMesh ref={meshRef} args={[null, null, towers.length]} castShadow receiveShadow>
      <boxGeometry args={[CELL, 1, CELL]} />
      <meshStandardMaterial
        metalness={0.08}
        roughness={0.28}
        emissive="#1a7f37"
        emissiveIntensity={0.45}
      />
    </instancedMesh>
  );
}

function YearDistrict({ yearData, z, maximum, labelX }) {
  const { towers, maximumHeight } = useMemo(() => {
    const prepared = yearData.days
      .filter((day) => day.count > 0)
      .map((day) => {
        const { week, weekday } = dayCoordinates(day.date);
        const height = towerHeight(day.count, maximum);
        return {
          x: -BLOCK_WIDTH / 2 + STEP / 2 + week * STEP,
          z: -BLOCK_DEPTH / 2 + STEP / 2 + weekday * STEP,
          height,
          color: towerColor(day.count, maximum),
        };
      });
    return {
      towers: prepared,
      maximumHeight: Math.max(2.5, ...prepared.map((tower) => tower.height)),
    };
  }, [maximum, yearData]);

  const labelHeight = BASE_HEIGHT + maximumHeight + 10.5;
  const beaconHeight = maximumHeight + 8.5;

  return (
    <group position={[0, 0, z]}>
      <mesh position={[0, BASE_HEIGHT / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[BLOCK_WIDTH + 1.2, BASE_HEIGHT, BLOCK_DEPTH + 1.2]} />
        <meshStandardMaterial
          color="#2a3340"
          metalness={0.18}
          roughness={0.72}
          emissive="#0b1a12"
          emissiveIntensity={0.35}
        />
      </mesh>

      <TowerInstances towers={towers} />

      <mesh position={[labelX, BASE_HEIGHT + beaconHeight / 2, 0]}>
        <cylinderGeometry args={[0.07, 0.12, beaconHeight, 8]} />
        <meshBasicMaterial color="#56d364" transparent opacity={0.38} depthWrite={false} />
      </mesh>

      <mesh position={[labelX, labelHeight - 1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 2.4, 48]} />
        <meshBasicMaterial
          color="#3fb950"
          transparent
          opacity={0.42}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <Html
        position={[labelX, labelHeight, 0]}
        center
        zIndexRange={[10, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div className="pointer-events-none whitespace-nowrap rounded-full border border-[#56d364]/40 bg-[#0d1117]/70 px-4 py-2 text-2xl font-semibold text-[#f0fff4] shadow-[0_0_30px_rgba(63,185,80,0.45)] backdrop-blur-md">
          {yearData.year}
        </div>
      </Html>
    </group>
  );
}

function SkylineCity({ years }) {
  const maximum = useMemo(
    () => Math.max(1, ...years.flatMap((year) => year.days.map((day) => day.count))),
    [years],
  );
  const totalDepth = years.length * BLOCK_DEPTH + Math.max(0, years.length - 1) * YEAR_GAP;
  const originZ = -totalDepth / 2 + BLOCK_DEPTH / 2;

  return (
    <group>
      {years.map((yearData, index) => (
        <YearDistrict
          key={yearData.year}
          yearData={yearData}
          maximum={maximum}
          labelX={(index % 2 === 0 ? -1 : 1) * BLOCK_WIDTH * 0.3}
          z={originZ + index * (BLOCK_DEPTH + YEAR_GAP)}
        />
      ))}
    </group>
  );
}

function Rings() {
  return [110, 160, 210].map((radius) => (
    <mesh key={radius} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
      <ringGeometry args={[radius - 0.55, radius + 0.55, 128]} />
      <meshBasicMaterial color="#3fb950" transparent opacity={0.22} />
    </mesh>
  ));
}

function Scene({ years }) {
  const controlsRef = useRef(null);
  const { camera } = useThree();

  useEffect(() => {
    const depth = years.length * BLOCK_DEPTH + Math.max(0, years.length - 1) * YEAR_GAP;
    const distance = Math.max(86, depth * 1.05, BLOCK_WIDTH * 1.35);
    camera.position.set(distance * 0.62, distance * 0.44, distance * 0.78);
    camera.near = 0.1;
    camera.far = 2500;
    camera.updateProjectionMatrix();
    if (controlsRef.current) {
      controlsRef.current.target.set(0, 8, 0);
      controlsRef.current.update();
    }
  }, [camera, years.length]);

  return (
    <>
      <color attach="background" args={["#0d1117"]} />
      <fog attach="fog" args={["#0d1117", 260, 780]} />

      <ambientLight color="#d7ffe0" intensity={0.85} />
      <hemisphereLight args={["#f3fff5", "#243044", 1.55]} />
      <directionalLight
        position={[110, 180, 90]}
        color="#ffffff"
        intensity={2.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
      />
      <directionalLight position={[-130, 100, -40]} color="#b7d9ff" intensity={1.35} />
      <directionalLight position={[10, 70, -160]} color="#6ef37a" intensity={1.7} />
      <directionalLight position={[-40, 50, 150]} color="#fff4e0" intensity={0.9} />
      <pointLight position={[0, 14, 0]} color="#56d364" intensity={2.2} distance={320} decay={1.6} />
      <pointLight position={[0, 120, 0]} color="#ffffff" intensity={1.1} distance={500} decay={2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <circleGeometry args={[320, 96]} />
        <meshStandardMaterial color="#1a222c" metalness={0.08} roughness={0.9} />
      </mesh>
      <gridHelper args={[360, 72, "#3fb950", "#243040"]} position={[0, 0.01, 0]} />
      <Rings />
      <SkylineCity years={years} />
      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={[0, 8, 0]}
        enableDamping
        enablePan
        autoRotate
        autoRotateSpeed={0.55}
        minDistance={24}
        maxDistance={720}
      />
    </>
  );
}

export default function SkylineExperience({ initialData }) {
  const [data] = useState(initialData);
  const [selectedYear, setSelectedYear] = useState(initialData.endYear);
  const [mode, setMode] = useState("cumulative");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing || !data) return undefined;
    const timer = window.setInterval(() => {
      setSelectedYear((year) => {
        if (year >= data.endYear) {
          setPlaying(false);
          return year;
        }
        return year + 1;
      });
    }, 950);
    return () => window.clearInterval(timer);
  }, [data, playing]);

  const visibleYears = useMemo(() => {
    if (!data) return [];
    if (mode === "single") return data.years.filter((year) => year.year === selectedYear);
    return data.years.filter((year) => year.year <= selectedYear);
  }, [data, mode, selectedYear]);

  const total = visibleYears.reduce((sum, year) => sum + year.total, 0);

  const stepYear = (direction) => {
    if (!data) return;
    setPlaying(false);
    setSelectedYear((year) =>
      Math.min(data.endYear, Math.max(data.startYear, year + direction)),
    );
  };

  const togglePlay = () => {
    if (!data) return;
    if (!playing && selectedYear >= data.endYear) setSelectedYear(data.startYear);
    setPlaying((value) => !value);
  };

  if (!data) {
    return (
      <div className="grid min-h-[70vh] place-items-center bg-[#0d1117] text-sm text-[#8b949e]">
        Loading contribution skyline…
      </div>
    );
  }

  return (
    <section className="relative h-[calc(100dvh-1rem)] min-h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1117] shadow-2xl">
      <Canvas
        className="absolute inset-0 h-full w-full"
        style={{ width: "100%", height: "100%" }}
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [120, 90, 150], fov: 42, near: 0.1, far: 2500 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.75 }}
      >
        <Scene key={`${mode}-${selectedYear}`} years={visibleYears} />
      </Canvas>

      <header className="pointer-events-none absolute left-5 top-5 z-20 sm:left-8 sm:top-8">
        <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#56d364]">
          GitHub Skyline
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-5xl">Nittarab</h1>
        <p className="mt-2 text-sm text-[#8b949e] sm:text-base">
          {mode === "single" ? selectedYear : `${data.startYear} → ${selectedYear}`}
        </p>
      </header>

      <div className="pointer-events-none absolute right-5 top-5 z-20 hidden text-xs tracking-wide text-[#8b949e] sm:block sm:right-8 sm:top-8">
        github/gh-skyline · live rebuild
      </div>

      <div className="absolute bottom-4 left-1/2 z-30 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 rounded-2xl border border-white/10 bg-[#161b22]/90 p-3 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => stepYear(-1)}
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
            aria-label="Previous year"
          >
            ‹
          </button>
          <input
            aria-label="Skyline year"
            type="range"
            min={data.startYear}
            max={data.endYear}
            step="1"
            value={selectedYear}
            onChange={(event) => {
              setPlaying(false);
              setSelectedYear(Number(event.target.value));
            }}
            className="h-2 min-w-0 flex-1 cursor-pointer accent-[#3fb950]"
          />
          <button
            type="button"
            onClick={() => stepYear(1)}
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
            aria-label="Next year"
          >
            ›
          </button>
          <button
            type="button"
            onClick={togglePlay}
            className={`grid size-10 shrink-0 place-items-center rounded-xl border text-sm text-white transition ${
              playing
                ? "border-[#56d364] bg-[#238636]/40"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
            aria-label={playing ? "Pause timeline" : "Play timeline"}
          >
            {playing ? "Ⅱ" : "▶"}
          </button>
        </div>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              ["cumulative", "Cumulative through year"],
              ["single", "Single year"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setPlaying(false);
                  setMode(value);
                }}
                className={`rounded-full border px-3 py-2 transition ${
                  mode === value
                    ? "border-[#3fb950] bg-[#238636]/25 text-[#aff5b4]"
                    : "border-white/10 bg-white/5 text-[#8b949e] hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="text-right text-xs text-[#8b949e]">
            <strong className="text-sm font-semibold text-white">{total.toLocaleString()}</strong>{" "}
            contributions
          </div>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-32 right-5 z-20 hidden text-xs text-[#6e7681] lg:block">
        Drag to orbit · Scroll to zoom
      </p>
    </section>
  );
}
