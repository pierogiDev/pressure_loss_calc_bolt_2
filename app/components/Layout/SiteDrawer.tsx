'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { Menu, Calculator, FileText, SquareFunction } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: '圧力損失計算', href: '/calculator', icon: Calculator },
  { name: '使用している数式', href: '/equations', icon: FileText },
  { name: 'ダミーページ', href: '/', icon: FileText },
];

export default function SiteDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        className="fixed top-4 left-4 z-50"
        onPress={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="fixed top-0 left-0 h-full w-[280px] bg-background/70 backdrop-blur-md shadow-lg z-50 border-r border-divider"
            >
              <div className="p-6">
                <div className="space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        variant={isActive ? "flat" : "light"}
                        className={`w-full flex items-center gap-3 rounded-lg ${
                          isActive ? "bg-primary-100" : ""
                        }`}
                        onPress={() => setIsOpen(false)}
                      >
                        <Icon size={20} className="flex-shrink-0" />
                        <span className="flex-grow text-left">{item.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}