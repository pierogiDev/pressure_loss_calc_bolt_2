'use client';

import { Card, CardBody } from '@nextui-org/react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function EquationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          使用している数式
        </h1>
        <p className="text-lg text-default-500">
          圧力損失計算に使用している数式の説明
        </p>
      </header>

      <div className="space-y-8">
        <Card className="border-1 border-default-200/50 rounded-2xl">
          <CardBody className="gap-6 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Darcy-Weisbach式</h2>
            <p className="text-default-600">
              管内の圧力損失を計算するための基本式です。
            </p>
            <div className="p-6 bg-default-50 rounded-xl flex justify-center">
              <BlockMath math="\Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho v^2}{2}" />
            </div>
            <ul className="list-disc list-inside space-y-3 text-default-600 ml-2">
              <li><InlineMath math="\Delta P" />: 圧力損失 [Pa]</li>
              <li><InlineMath math="f" />: 管摩擦係数 [-]</li>
              <li><InlineMath math="L" />: 管長 [m]</li>
              <li><InlineMath math="D" />: 管径 [m]</li>
              <li><InlineMath math="\rho" />: 流体密度 [kg/m³]</li>
              <li><InlineMath math="v" />: 流速 [m/s]</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="border-1 border-default-200/50 rounded-2xl">
          <CardBody className="gap-6 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">Colebrook-White式</h2>
            <p className="text-default-600">
              管摩擦係数を求めるための式です。
            </p>
            <div className="p-6 bg-default-50 rounded-xl flex justify-center">
              <BlockMath math="\frac{1}{\sqrt{f}} = -2\log_{10}\left(\frac{\varepsilon}{3.7D} + \frac{2.51}{Re\sqrt{f}}\right)" />
            </div>
            <ul className="list-disc list-inside space-y-3 text-default-600 ml-2">
              <li><InlineMath math="f" />: 管摩擦係数 [-]</li>
              <li><InlineMath math="\varepsilon" />: 管壁粗さ [m]</li>
              <li><InlineMath math="D" />: 管径 [m]</li>
              <li><InlineMath math="Re" />: レイノルズ数 [-]</li>
            </ul>
          </CardBody>
        </Card>

        <Card className="border-1 border-default-200/50 rounded-2xl">
          <CardBody className="gap-6 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold">レイノルズ数</h2>
            <p className="text-default-600">
              流れの状態（層流か乱流か）を判断するための無次元数です。
            </p>
            <div className="p-6 bg-default-50 rounded-xl flex justify-center">
              <BlockMath math="Re = \frac{\rho v D}{\mu}" />
            </div>
            <ul className="list-disc list-inside space-y-3 text-default-600 ml-2">
              <li><InlineMath math="Re" />: レイノルズ数 [-]</li>
              <li><InlineMath math="\rho" />: 流体密度 [kg/m³]</li>
              <li><InlineMath math="v" />: 流速 [m/s]</li>
              <li><InlineMath math="D" />: 管径 [m]</li>
              <li><InlineMath math="\mu" />: 粘性係数 [Pa·s]</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}